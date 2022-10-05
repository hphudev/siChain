// * Domain
import jwtDefaultConfig from '@src/@core/auth/jwt/jwtDefaultConfig'

// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Axios Imports
import axios from 'axios'
// ** Hooks
// import { useRTL } from '@hooks/useRTL'

// ** Third Party Components
import SwiperCore, {
  Grid,
  Lazy,
  Virtual,
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  EffectCube,
  EffectCoverflow
} from 'swiper'

// ** Reactstrap Imports
import {
  Card,
  CardSubtitle,
  CardLink,
  Row,
  Col,
  Modal,
  Input,
  Label,
  Button,
  CardBody,
  CardText,
  CardTitle,
  ModalBody,
  ModalHeader,
  FormFeedback,
  ModalFooter,
  Spinner
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { Controller } from 'react-hook-form'

// ** Utils
// import { selectThemeColors } from '@utils'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import PickerCustom from '../Picker/PickerCustom'
import TextareaCustom from '../Textarea/TextareaCustom'
import SwiperCoverflowCustom from '../../SwiperCoverflow/SwiperCoverflowCustom'
import '@styles/react/libs/swiper/swiper.scss' // **Swiper
import ListGroupCustom from '../ListGroup/ListGroupCustom'

// ** Swiper
// ** Init Swiper Functions
SwiperCore.use([Navigation, Grid, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])

// Images
// import img1 from '@src/assets/images/banner/banner-39.jpg'
import FormInputRepeatCustom from '../FormInputRepeatCustom/FormInputRepeatCustom'
import FormInputRepeatShoppingPlace from '../FormInputRepeatShoppingPlace/FormInputRepeatShoppingPlace'
import PaginationCustom from '../PaginationCustom/PaginationCustom'
import TimelineCustom from '../TimelineCustom/TimelineCustom'

// const statusOptions = [
//   { value: 'active', label: 'Active' },
//   { value: 'inactive', label: 'Inactive' },
//   { value: 'suspended', label: 'Suspended' }
// ]

// const countryOptions = [
//   { value: 'uk', label: 'UK' },
//   { value: 'usa', label: 'USA' },
//   { value: 'france', label: 'France' },
//   { value: 'russia', label: 'Russia' },
//   { value: 'canada', label: 'Canada' }
// ]

// const typeOptions = [
//   { value: 'good', label: 'Tốt' },
//   { value: 'rather', label: 'Khá' },
//   { value: 'middle', label: 'Trung bình' },
//   { value: 'least', label: 'Kém' }
// ]

// const isRFID = [
//   { value: 'yes', label: 'Có'},
//   { value: 'no', label: 'Không'}
// ]

// const defaultValues = {
//   name: 'Sản phẩm A',
//   code: 'xyza',
//   number: '200',
//   price: '4,600,000',
//   describe: 'Sản phẩm A tốt'
// }

const ModalShowProductHistory = (props) => {

  // const [arrData, setArrData] = useState([])
  // const [users, setUsers] = useState([])
  const [data, setData]  = useState([])
  const [pages, setPages] = useState(1)
  const [perPage, setPerPage] = useState(1)
  const [isShowProgress, setIsShowProgress] = useState(false)
  // const [heightScrolled, setHeightScrolled] = useState(0)

  console.log(props.data.Products.id)
  const getHistory = async (perPage) => {
      setIsShowProgress(true)
      await axios.get(`${jwtDefaultConfig.endPoint}/api/v1/products/history?skip=${perPage - 1}&limit=5&order_by=created_at%20DESC&product_id=${props.data.Products.id}`)
        .then(async (res) => {
          setPages(res.data.page_total)
          // setPerPage(res.data.page)
          res = res.data.data
          setData(prev => [
            ...prev,
            ...res
          ])
          // const getUser = async (idFrom, idTo, item) => {
          //   const userFrom = await axios.get(`https://sichain.herokuapp.com/api/v1/user/user?user_id=${idFrom}`)
          //   const userTo = await axios.get(`https://sichain.herokuapp.com/api/v1/user/user?user_id=${idTo}`)
          //   setUsers(prev => [
          //     ...prev, 
          //     {
          //       userFrom: userFrom.data,
          //       userTo: userTo.data,
          //       data: item
          //     }
          //   ])
          // }
          // const temp = res.map(async (item) => {
          //   console.log('---')
          //   const temp = await getUser(item.ProductHistory.transfer_from_user_id, item.ProductHistory.transfer_to_user_id, item)
          //   return temp
          // })
          // const wait = await Promise.all(temp)
          // console.log(wait)
          // getUser(res[res.length - 1].TransferRequests.transfer_from_user_id, res[res.length - 1])
          setIsShowProgress(false)
        })
        .catch((error) => {
          console.log(error)
          setIsShowProgress(false)
        })
    }
  useEffect(() => {
    console.log(1)
    setData([])
    setPerPage(1)
    getHistory(1)
    
    // Event
    // const handleScroll = () => {
    //   console.log('pages')
    //   if (window.scrollY > heightScrolled && window.scrollY % 200 === 0 && ((heightScrolled / 200)) < pages) {
    //     getHistory((heightScrolled / 200) + 1)
    //     setHeightScrolled(window.scrollY)
    //   }
    // }
    // window.addEventListener('scroll', handleScroll)

    // return () => {
    //   window.removeEventListener('scroll', handleScroll)
    // }
  }, [])
  // const [isRtl] = useRTL()
  // // ** States
  // // const [show, setShow] = useState(false)
  // console.log('render ', props.isShow)
  // // ** Hooks
  // const {
  //   control,
  //   setError,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm({ defaultValues })

  // const onSubmit = data => {
  //   if (Object.values(data).every(field => field.length > 0)) {
  //     return null
  //   } else {
  //     for (const key in data) {
  //       if (data[key].length === 0) {
  //         setError(key, {
  //           type: 'manual'
  //         })
  //       }
  //     }
  //   }
  // }

  const handleShowMore = () => {
    setPerPage(perPage + 1)
    getHistory(perPage + 1)
  }
  return (
    <Fragment>
      <Modal isOpen={props.isShow} toggle={() => props.changeState()} className='modal-dialog-centered modal-lg modal-dialog-scrollable pe-1 pb-1' >
        <ModalHeader className='bg-transparent' toggle={() => props.changeState()}>
            <h3 className='modal-title mt-1 text-bold'>Lịch sử sản phẩm (<span style={{fontWeight: '700'}}>{props.data.Products.name}</span>)</h3>
        </ModalHeader>
        <ModalBody className='px-sm-2 mx-50 pb-5'>
          <div>
            {
              (Array.isArray(data) && data.length > 0 && !isShowProgress) ? (
                <TimelineCustom data={data}/>
              ) : (
                (isShowProgress) ? (
                  <div className='w-100 text-center mt-2 text-warning'>
                    <Spinner color='success' />
                  </div>
                ) : (<div className='w-100 text-center mt-2 text-warning'>Chưa có</div>)
              )
            }
          </div>
          {
            (data.length > 0 && perPage < pages) && (
              <div className='d-flex justify-content-center' style={{
                width: "100%",
                marginTop: "100px"
              }}>
                <Button outline color='dark' onClick={handleShowMore}>
                  Hiển thị thêm
                </Button>
              </div>
            )
          }
          {/* <div className='mt-3'>
            {
              (Array.isArray(users) && users.length > 0 && !isShowProgress) ? (
                users.map((item, index) => {
                  const date = new Date(item.data.TransferRequests.created_at)
                  console.log(item)
                  return (
                    <Card key={index}>
                      <div className='d-flex'>
                        <CardBody>
                          <CardTitle tag='h5'>Người gửi</CardTitle>
                          <CardSubtitle className='text-dark'>Họ và tên: <span className='text-success'>{item.userFrom.name}</span></CardSubtitle>
                          <CardSubtitle className='text-dark mt-1'>Email: <span className='text-success'>{item.userFrom.email}</span></CardSubtitle>
                          <CardSubtitle className='text-dark mt-1'>Vai trò: <span className='text-success'>{item.userFrom.Role.description}</span></CardSubtitle>
                        </CardBody>
                        <CardBody>
                          <CardTitle tag='h5'>Người nhận</CardTitle>
                          <CardSubtitle className='text-dark'>Họ và tên: <span className='text-success'>{item.userTo.name}</span></CardSubtitle>
                          <CardSubtitle className='text-dark mt-1'>Email: <span className='text-success'>{item.userTo.email}</span></CardSubtitle>
                          <CardSubtitle className='text-dark mt-1'>Vai trò: <span className='text-success'>{item.userTo.Role.description}</span></CardSubtitle>
                        </CardBody>
                      </div>
                      <hr/>
                      <CardBody>
                        <CardText>Ngày tạo: <span className='fw-bold'>{
                            (`${`0${date.getDate()}`.slice(-2)  }-${`0${date.getMonth() + 1}`.slice(-2)  }-${  date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
                          }</span>
                        </CardText>
                      </CardBody>
                    </Card>
                  )
                })
                ) : (
                  (isShowProgress) ? (
                    <div className='w-100 text-center mt-2 text-warning'>
                      <Spinner color='success' />
                    </div>
                  ) : (<div className='w-100 text-center mt-2 text-warning'>Chưa có</div>)
                  )
              }
          </div> */}
        </ModalBody>
        <ModalFooter>
              <div style={{
                display: 'flex',
                alignItems:'end',
                flexDirection: 'column'
              }}>
                  {/* <PaginationCustom className='me-1' pages={pages} perPage={perPage} /> */}
                  <Button 
                    type='submit'
                    className='me-1'
                    style={{
                      width: 'fit-content'
                    }}
                    color='primary' 
                    onClick={() => props.changeState()}>
                    Quay lại
                  </Button>
              </div>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}

export default ModalShowProductHistory
