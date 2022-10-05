// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Alert, Col, Row } from 'reactstrap'
import MainUsersTable from './components/MainUsersTable/UsersTable'
// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import UsersListCustom from './components/User/list'

const LayoutEmpty = () => {
  return (
    <Fragment>
      <Breadcrumbs title='Quản lý người dùng' data={[{ title: 'Tính năng' }, { title: 'Quản lý người dùng' }]} />
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
          {/* <MainUsersTable title="Danh sách người dùng" /> */}
          <UsersListCustom />
        </Col>
      </Row>
      </Fragment>
    </Fragment>
  )
}

export default LayoutEmpty
