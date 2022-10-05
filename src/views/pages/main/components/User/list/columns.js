// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
// import { getUser, deleteUser } from '../store'
import { getUser } from '../store'

// ** Icons Imports
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, Eye, Edit, Delete } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Tooltip } from 'reactstrap'
import { useState } from 'react'

// ** Renders Client Columns
const renderClient = row => {
  // if (row.avatar.length) {
  //   return <Avatar className='me-1' img={row.avatar} width='32' height='32' />
  // } else {
    return (
      <Avatar
        initials
        className='me-1'
        color={row.avatarColor || 'light-primary'}
        content={row.name || 'John Doe'}
      />
    )
  // }
}

// ** Renders Role Columns
const renderRole = row => {
  const roleObj = {
    subscriber: {
      class: 'text-primary',
      icon: User
    },
    maintainer: {
      class: 'text-success',
      icon: Database
    },
    editor: {
      class: 'text-info',
      icon: Edit2
    },
    author: {
      class: 'text-warning',
      icon: Settings
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : Edit2

  return (
    <span className='text-truncate text-capitalize align-middle'>
      {/* <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : ''} me-50`} /> */}
      {row.Role.description}
    </span>
  )
}

// const statusObj = {
//   pending: 'light-warning',
//   active: 'light-success',
//   inactive: 'light-secondary'
// }

export const columns = [
  {
    name: 'Người dùng',
    sortable: true,
    minWidth: '500px',
    sortField: 'name',
    selector: row => row.name,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`custom/${row.id}`}
            className='user_name text-truncate text-body'
            onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='fw-bolder'>{row.name}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Vai trò',
    sortable: true,
    minWidth: '300px',
    sortField: 'role',
    selector: row => row.Role.description,
    cell: row => renderRole(row)
  },
  {
    name: 'Địa chỉ',
    minWidth: '400px',
    sortable: true,
    sortField: 'address',
    selector: row => row.address,
    cell: row => <span className='text-capitalize'>{row.address}</span>
  },
  // {
  //   name: 'Billing',
  //   minWidth: '230px',
  //   sortable: true,
  //   sortField: 'billing',
  //   selector: row => row.billing,
  //   cell: row => <span className='text-capitalize'>{row.billing}</span>
  // },
  // {
  //   name: 'Tình trạng',
  //   minWidth: '138px',
  //   sortable: true,
  //   sortField: 'status',
  //   selector: row => row.status,
  //   cell: row => (
  //     <Badge className='text-capitalize' color={statusObj[row.status]} pill>
  //       {row.status}
  //     </Badge>
  //   )
  // },
  {
    name: 'Hành động',
    minWidth: '100px',
    cell: row => {
      const [tooltipPreviewOpen, setTooltipPreviewOpen] = useState(false)
      // const [tooltipDeleteOpen, setTooltipDeleteOpen] = useState(false)
      return (
      <div>
        {/* <UncontrolledDropdown>
          <DropdownToggle tag='div' className='btn btn-sm'>
            <MoreVertical size={14} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              tag={Link}
              className='w-100'
              to={`/apps/user/view/${row.id}`}
              onClick={() => store.dispatch(getUser(row.id))}
            >
              <FileText size={14} className='me-50' />
              <span className='align-middle'>Details</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Archive size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem
              tag='a'
              href='/'
              className='w-100'
              onClick={e => {
                e.preventDefault()
                store.dispatch(deleteUser(row.id))
              }}
            >
              <Trash2 size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
        <div className='d-flex'>
            <div className='pe-2 cursor-pointer text-primary' title='Xem'>
            <Link
              to={`custom/${row.id}`}
              onClick={() => store.dispatch(getUser(row.id))}
            >
              <Eye
                id='user_preview' size={20}
               />
              <Tooltip
                placement='top'
                isOpen={tooltipPreviewOpen}
                target='user_preview'
                toggle={() => setTooltipPreviewOpen(!tooltipPreviewOpen)}
              >
                Xem
              </Tooltip>
            </Link>
            </div>
            {/* <div className='cursor-pointer text-danger'>
              <Delete id='user_delete' size={20} />
              <Tooltip
                placement='top'
                isOpen={tooltipDeleteOpen}
                target='user_delete'
                toggle={() => setTooltipDeleteOpen(!tooltipDeleteOpen)}
              >
                Xóa
              </Tooltip>
            </div> */}
          </div>
      </div>
      )
    }
  }
]
