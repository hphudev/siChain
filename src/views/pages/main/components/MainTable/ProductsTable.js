// ** React Imports
import { Fragment, useState, useEffect, memo, useRef } from 'react'

// ** Table Columns
import { serverSideColumns } from './data'

// ** Store & Actions
import { getData } from './store'
import { useSelector, useDispatch } from 'react-redux'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Filter, Settings } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, Input, Label, Row, Col, Button, Spinner } from 'reactstrap'

const MainTable = (props) => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.dataTables)

  // ** State
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [isShowProgress, setIsShowProgress] = useState(false)

  // ** Get data on mount
  useEffect(() => {
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        q: searchValue,
        handleProgress: (value) => setIsShowProgress(value)
      })
    )
  }, [dispatch])

  // ** Function to handle filter
  const handleFilter = e => {
    
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        q: e.target.value,
        handleProgress: (value) => setIsShowProgress(value)
      })
    )
  }

  const timeoutRef = useRef()
  const prevHandleFilter = (e) => {
    setSearchValue(e.target.value)
    setIsShowProgress(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      handleFilter(e)
    }, 400)
  }
  
  // ** Function to handle Pagination and get data
  const handlePagination = page => {
    dispatch(
      getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
        q: searchValue
      })
    )
    setCurrentPage(page.selected + 1)
  }

  // ** Function to handle per page
  const handlePerPage = e => {
    dispatch(
      getData({
        page: currentPage,
        perPage: parseInt(e.target.value),
        q: searchValue
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Math.ceil(store.total / rowsPerPage)

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        breakLabel='...'
        pageCount={Math.ceil(count) || 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        activeClassName='active'
        pageClassName='page-item'
        breakClassName='page-item'
        nextLinkClassName='page-link'
        pageLinkClassName='page-link'
        breakLinkClassName='page-link'
        previousLinkClassName='page-link'
        nextClassName='page-item next-item'
        previousClassName='page-item prev-item'
        containerClassName={
          'pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
        }
      />
    )
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      q: searchValue
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  return (
    <Fragment>
      <Card>
        <CardHeader className='border-bottom'>
          <CardTitle tag='h4'>{props.title}</CardTitle>
        </CardHeader>
        <Row className='mx-0 mt-1 mb-50'>
          <Col sm='6'>
            <div className='d-flex align-items-center'>
              <Label for='sort-select'>Hiển thị</Label>
              <Input
                className='dataTable-select'
                style={{
                  maxWidth: '100px'
                }}
                type='select'
                id='sort-select'
                value={rowsPerPage}
                onChange={e => handlePerPage(e)}
              >
                <option value={7}>7</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </Input>
              <Label for='sort-select'>hàng</Label>
            </div>
          </Col>
          <Col className='d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1' sm='6'>
            {
              isShowProgress && (
                <div className='me-1'>
                  <Spinner color='primary' />
                </div>
              )
            }
            <Label className='me-1' for='search-input'>
              Tìm kiếm
            </Label>
            <Input
              className='dataTable-filter'
              style={{
                maxWidth: '250px',
                margin: '0 16px'
              }}
              type='text'
              bsSize='sm'
              id='search-input'
              value={searchValue}
              onChange={prevHandleFilter}
            />
          </Col>
        </Row>
        <div className='react-dataTable'>
          <DataTable
            // selectableRows
            style={{
              minHeight: '1000px'
            }}
            noHeader
            pagination
            paginationServer
            className='react-dataTable'
            columns={serverSideColumns}
            sortIcon={<ChevronDown size={10} />}
            paginationComponent={CustomPagination}
            data={dataToRender()}
          />
        </div>
      </Card>
    </Fragment>
  )
}

export default memo(MainTable)
