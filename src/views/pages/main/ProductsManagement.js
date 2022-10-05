// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Alert, Col, Row } from 'reactstrap'
import MainTable from './components/MainTable/ProductsTable'
import TableServerSide from '../../tables/data-tables/advance/TableServerSide'
import ModalEditProduct from './components/ModalEditProduct/ModalEditProduct'

const LayoutEmpty = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Quản lý sản phẩm' data={[{ title: 'Tính năng' }, { title: 'Quản lý sản phẩm' }]} />
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Chú thích: </span>
          <span>
            Đây là phiên bản thử nghiệm, nhiều tính năng khác đang được <b>SiCHAIN</b> phát triển
          </span>
        </div>
      </Alert>
      <Fragment>
      <Row>
        <Col sm='12'>
          <MainTable title="Danh sách sản phẩm" />
        </Col>
      </Row>
      {/* <Row>
        <Col sm='12'>
          <ModalEditProduct />
        </Col>
      </Row> */}
      </Fragment>
    </Fragment>
  )
}

export default LayoutEmpty
