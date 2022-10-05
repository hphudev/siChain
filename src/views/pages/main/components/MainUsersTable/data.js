// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { useState } from 'react'
import { MoreVertical, Edit, FileText, Archive, Trash, Delete, Eye } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import ModalEditIngredient from '../ModalEditingredient/ModalEditingredient'
import ModalEditProduct from '../ModalEditProduct/ModalEditProduct'
import ModalEditProductImage from '../ModalEditProductImages/ModalEditProductImages'
import ModalEditShoppingPlace from '../ModalEditShoppingPlace/ModalEditShoppingPlace'
import ModalShowDetailProduct from '../ModalShowDetailProduct/ModalShowDetailProduct'
import ModalShowProductHistory from '../ModalShowProductHistory/ModalShowProductHistory'
// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/products-data').then(response => {
  data = response.data
})

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]
// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: 'ID',
    reorder: true,
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    reorder: true,
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    reorder: true,
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    reorder: true,
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    reorder: true,
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    reorder: true,
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='fw-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='fw-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Name',
    minWidth: '250px',
    sortable: row => row.full_name,
    cell: row => (
      <div className='d-flex align-items-center'>
        {row.avatar === '' ? (
          <Avatar color={`light-${states[row.status]}`} content={row.full_name} initials />
        ) : (
          <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} />
        )}
        <div className='user-info text-truncate ms-1'>
          <span className='d-block fw-bold text-truncate'>{row.full_name}</span>
          <small>{row.post}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: row => row.salary
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Status',
    minWidth: '150px',
    sortable: row => row.status.title,
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: row => row.salary
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '150px',
    selector: row => row.status,
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    sortable: true,
    name: 'Họ và tên',
    minWidth: '225px',
    selector: row => row.name
  },
  {
    sortable: true,
    name: 'Giới tính',
    minWidth: '200px',
    selector: row => row.code
  },
  {
    sortable: true,
    name: 'Phân loại',
    minWidth: '100px',
    selector: row => row.type
  },
  {
    sortable: true,
    name: 'Số lượng',
    minWidth: '150px',
    selector: row => row.number
  },
  {
    sortable: true,
    name: 'Gắn RFID',
    minWidth: '150px',
    selector: row => row.isRFID
  },
  {
    sortable: true,
    name: 'Giá (VND)',
    minWidth: '150px',
    selector: row => row.price
  },
  {
    sortable: true,
    name: 'Ngày sản xuất',
    minWidth: '150px',
    selector: row => row.export_date
  },
  {
    name: 'Hành động',
    allowOverflow: true,
    cell: () => {
      const [isShow, setIsShow] = useState(false)
      const [isShowDetailModal, setIsShowDetailModal] = useState(false)
      const [isShowEditProductImages, setIsShowProductImages] = useState(false)
      const [isShowEditIngredient, setIsShowEditIngredient] = useState(false)
      const [isShowEditShoppingPlace, setIsShowEditShoppingPlace] = useState(false)
      const [isShowProductHistory, setIsShowProductHistory] = useState(false)
      
      const changeShowProductImages = () => {
        // setIsShow(isShowEditProductImages)
        setIsShowProductImages(!isShowEditProductImages)
      }

      const changeShowEditIngredient = () => {
        // setIsShow(isShowEditIngredient)
        setIsShowEditIngredient(!isShowEditIngredient)
      }

      const changeShowEditShoppingPlace = () => {
        setIsShowEditShoppingPlace(!isShowEditShoppingPlace)
      }

      const changeShowProductHistory = () => {
        setIsShowProductHistory(!isShowProductHistory)
      }

      console.log(isShow)
      return (
        <>
          <ModalShowDetailProduct isShow={isShowDetailModal} changeState={() => setIsShowDetailModal(!isShowDetailModal)} openShowProductHistory={changeShowProductHistory}/>
          <ModalShowProductHistory isShow={isShowProductHistory} changeState={() => setIsShowProductHistory(!isShowProductHistory)} />
          <ModalEditProduct 
            isShow={isShow}
            changeState={() => setIsShow(!isShow)}
            openImageModal={changeShowProductImages}
            openIngredientModal={changeShowEditIngredient} 
            openShoppingPlaceModal={changeShowEditShoppingPlace}/>
          <ModalEditProductImage isShow={isShowEditProductImages} changeState={changeShowProductImages} />
          <ModalEditIngredient isShow={isShowEditIngredient} changeState={changeShowEditIngredient} />
          <ModalEditShoppingPlace isShow={isShowEditShoppingPlace} changeState={changeShowEditShoppingPlace} />
          <div className='d-flex'>
            <div className='pe-2 cursor-pointer text-primary' title='Chỉnh sửa'>
              <Eye size={20} onClick={() => setIsShowDetailModal(!isShowDetailModal)}/>
            </div>
            <div className='pe-2 cursor-pointer text-warning' title='Chỉnh sửa'>
              <Edit size={20} onClick={() => setIsShow(!isShow)}/>
            </div>
            <div className='cursor-pointer text-danger' title='Xóa'>
              <Delete  size={20} />
            </div>
          </div>
        </>
      )
    }
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Post',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'City',
    sortable: true,
    minWidth: '150px',
    selector: row => row.city
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '100px',
    selector: row => row.salary
  }
]

export default ExpandableTable
