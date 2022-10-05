// ** React Imports
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UILoader from '@components/ui-loader'
// ** Custom Hooks
import { useSkin } from '@hooks/useSkin'
import useJwt from '@src/auth/jwt/useJwt'

// ** Third Party Components
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import { Facebook, Twitter, Mail, GitHub, HelpCircle, Coffee, X } from 'react-feather'

// ** Actions
import { handleLogin } from '@store/authentication'

// ** Context
import { AbilityContext } from '@src/utility/context/Can'

// ** Custom Components
import Avatar from '@components/avatar'
import InputPasswordToggle from '@components/input-password-toggle'

// ** Utils
import { getHomeRouteForLoggedInUser } from '@utils'

// ** Reactstrap Imports
import { Row, Col, Form, Input, Label, Alert, Button, CardText, CardTitle, UncontrolledTooltip, Progress, Spinner } from 'reactstrap'

// ** Styles
import '@styles/react/pages/page-authentication.scss'

// ** images
import SiChainLogo from '@src/assets/images/logo/sichain.png'
import SiChainUser from '@src/assets/images/logo/sichain_user.png'

const ToastContent = ({ t, name, role }) => {
  return (
    <div className='d-flex'>
      <div className='me-1'>
        <Avatar size='sm' color='success' icon={<Coffee size={12} />} />
      </div>
      <div className='d-flex flex-column'>
        <div className='d-flex justify-content-between'>
          <h6>{name}</h6>
          <X size={12} className='cursor-pointer' onClick={() => toast.dismiss(t.id)} />
        </div>
        <span>Bạn đã đăng nhập thành công. Chào mừng bạn đến với SiCHAIN với vai trò là <span className='fw-bold'>{role}</span></span>
      </div>
    </div>
  )
}

const defaultValues = {
  password: 'admin',
  loginEmail: 'admin@gmail.com'
}

const Login = () => {
  // ** Hooks

  const [isShowProgress, setIsShowProgress] = useState(false)

  const { skin } = useSkin()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ability = useContext(AbilityContext)
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })
  const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
    source = require(`@src/assets/images/pages/${illustration}`).default

  const onSubmit = data => {
    const username = data.loginEmail
    const password = data.password
    if (Object.values(data).every(field => field.length > 0)) {
      setIsShowProgress(true)
      useJwt
        .login({ username: data.loginEmail, password: data.password })
        .then(res_1 => {
        // console.log(res)
        // const data = { ...res.data.userData, accessToken: res.data.access_token, refreshToken: res.data.refreshToken }
          const userData = {
            id: 1,
            fullName: 'John Doe',
            username,
            password,
            // avatar: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default,
            avatar: SiChainUser,
            email: 'admin@gmail.com',
            role: 'admin',
            ability: [
              {
                action: 'manage',
                subject: 'all'
              }
            ],
            extras: {
              eCommerceCartItemsCount: 5
            }
          }
          useJwt.setToken(JSON.stringify(res_1.data.access_token))
          useJwt.getUser()
            .then(res_2 => {
              setIsShowProgress(false)
              userData.fullName = res_2.name
              userData.email = res_2.email
              const data = { ...userData, accessToken: res_1.data.access_token }
              dispatch(handleLogin(data)) // Note
              ability.update(userData.ability)
              navigate(getHomeRouteForLoggedInUser(data.role))
              toast(t => (
                <ToastContent t={t} role={data.role || 'admin'} name={data.fullName || data.username || 'John Doe'} />
              ))
            })
          .catch(err => {
            console.log(err)
            setIsShowProgress(false)
          })
        })
        .catch(err => {
          console.log(err)
          setIsShowProgress(false)
        })
    } else {
      for (const key in data) {
        if (data[key].length === 0) {
          setError(key, {
            type: 'manual'
          })
        }
      }
    }
  }

  
  const Loader = () => {
    return (
      <>
        <Spinner color='primary' />
        <CardText className='mb-0 mt-1 text-white'>Vui lòng đợi...</CardText>
      </>
    )
  }

  return (
    <UILoader blocking={isShowProgress} loader={<Loader />}>
    <div className='auth-wrapper auth-cover'>
        <Row className='auth-inner m-0'>
          <Link className='brand-logo' to='/' onClick={e => e.preventDefault()}>
            <img src={SiChainLogo} alt='' width={50} height={50} />
            <h2 className='brand-text text-primary ms-1 mt-1'>SiCHAIN</h2>
          </Link>
          <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
            <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
              <img className='img-fluid' src={source} alt='Login Cover' />
            </div>
          </Col>
          <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
            <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
              <CardTitle tag='h2' className='fw-bold mb-1'>
                Hệ quản trị nông nghiệp SiCHAIN
              </CardTitle>
              <CardText className='mb-2'>Hãy đăng nhập bằng tài khoản của bạn</CardText>
              <Alert color='primary'>
                <div className='alert-body font-small-2'>
                  <p>
                    <small className='me-50'>
                      <span className='fw-bold'>Admin:</span> admin@gmail.com | admin
                    </small>
                  </p>
                  {/* <p>
                    <small className='me-50'>
                    <span className='fw-bold'>Client:</span> client@demo.com | client
                    </small>
                  </p> */}
                </div>
                <HelpCircle
                  id='login-tip'
                  className='position-absolute'
                  size={18}
                  style={{ top: '10px', right: '10px' }}
                />
                <UncontrolledTooltip target='login-tip' placement='left'>
                  Đây là phiên bản thử nghiệm
                </UncontrolledTooltip>
              </Alert>
              <Form className='auth-login-form mt-2' onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-1'>
                  <Label className='form-label' for='login-email'>
                    Email
                  </Label>
                  <Controller
                    id='loginEmail'
                    name='loginEmail'
                    control={control}
                    render={({ field }) => (
                      <Input
                        autoFocus
                        type='email'
                        placeholder='john@example.com'
                        invalid={errors.loginEmail && true}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div className='mb-1'>
                  <div className='d-flex justify-content-between'>
                    <Label className='form-label' for='login-password'>
                      Mật khẩu
                    </Label>
                    <Link to='/forgot-password'>
                      <small>Quên mật khẩu</small>
                    </Link>
                  </div>
                  <Controller
                    id='password'
                    name='password'
                    control={control}
                    render={({ field }) => (
                      <InputPasswordToggle className='input-group-merge' invalid={errors.password && true} {...field} />
                      )}
                  />
                </div>
                <div className='form-check mb-1'>
                  <Input type='checkbox' id='remember-me' />
                  <Label className='form-check-label' for='remember-me'>
                    Ghi nhớ đăng nhập
                  </Label>
                </div>
                <Button type='submit' color='primary' block disabled={isShowProgress}>
                  {
                    (isShowProgress) ? (
                        <div>
                          <Spinner color='white' size='sm'/>
                          <span className='ms-50'>Đăng nhập</span>
                        </div>
                      ) : 'Đăng nhập'
                  }
                </Button>
              </Form>
              <p className='text-center mt-2'>
                <span className='me-25'>Bạn chưa là thành viên ?</span>
                <Link to='/register'>
                  <span>Tạo tài khoản</span>
                  {/* <span>{}</span> */}
                </Link>
              </p>
              {/* <div className='divider my-2'>
                <div className='divider-text'>or</div>
              </div>
              <div className='auth-footer-btn d-flex justify-content-center'>
                <Button color='facebook'>
                  <Facebook size={14} />
                </Button>
                <Button color='twitter'>
                  <Twitter size={14} />
                </Button>
                <Button color='google'>
                  <Mail size={14} />
                </Button>
                <Button className='me-0' color='github'>
                  <GitHub size={14} />
                </Button>
              </div> */}
            </Col>
          </Col>
        </Row>
      </div>
    </UILoader>
  )
}

export default Login
