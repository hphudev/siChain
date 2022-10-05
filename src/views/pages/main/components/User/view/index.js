// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link, NavLink } from 'react-router-dom'

// ** Store & Actions
import { getUser } from '../store'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap Imports
import { Row, Col, Alert, Button, Spinner } from 'reactstrap'

// ** User View Components
import UserTabs from './Tabs'
import PlanCard from './PlanCard'
import UserInfoCard from './UserInfoCard'

// ** Styles
import '@styles/react/apps/app-users.scss'
import { ChevronLeft, Home, SkipBack } from 'react-feather'

const UserViewCustom = () => {
  // ** Store Vars
  const store = useSelector(state => state.users)
  const dispatch = useDispatch()

  // ** Hooks
  const { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getUser(id))
  }, [dispatch])

  const [active, setActive] = useState('2')

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col className='mb-1' xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <Link
            to={`/main/users-management/`}
          >
            <Button color='dark' outline>
              <ChevronLeft size={14} />
              <span className='align-middle ms-25'>Quay lại</span>
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard selectedUser={store.selectedUser} />
          {/* <PlanCard /> */}
        </Col>
        <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs active={active} toggleTab={toggleTab} />
        </Col>
      </Row>
    </div>
  ) : (
    (store.selectedUser === -1) ? (
      <>
        {
          console.log(store.selectedUser)
        }
        <Alert color='danger'>
          <h4 className='alert-heading'>User not found</h4>
          <div className='alert-body'>
            User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
          </div>
        </Alert>
      </>) : (
          <div>
            <Spinner />
          </div>
        )
  )
}
export default UserViewCustom
