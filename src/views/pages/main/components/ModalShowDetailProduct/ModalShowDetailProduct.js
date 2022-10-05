// ** React Imports
import { Fragment } from 'react'
import QRCode from 'qrcode.react'
// ** Hooks
import { useRTL } from '@hooks/useRTL'

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
  FormFeedback
} from 'reactstrap'

// ** Third Party Components
import Select from 'react-select'
import { User, Check, X } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'

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

const defaultValues = {
  name: 'Sản phẩm A',
  code: 'xyza',
  number: '200',
  price: '4,600,000',
  describe: 'Sản phẩm A tốt'
}

const ModalShowDetailProduct = (props) => {

  const [isRtl] = useRTL()
  // ** States
  // const [show, setShow] = useState(false)
  // console.log('render ', props.isShow)
  // ** Hooks
  const {
    // control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  const onSubmit = data => {
    if (Object.values(data).every(field => field.length > 0)) {
      return null
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
  return (
    <Fragment>
      <Modal isOpen={props.isShow} toggle={() => props.changeState()} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => props.changeState()}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Xem thông tin sản phẩm</h1>
            <p>Khi bạn đang ở chế độ xem, bạn sẽ không thể thực hiện hiệu chỉnh.</p>
          </div>
          <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
            <Col xs={12}>
              <Label className='form-label' for='name'>
                Tên sản phẩm
              </Label>
              {/* <Controller
                control={control}
                name='name'
                render={({ props.data }) => {
                  return ( */}
                    <Input
                      id='name'
                      placeholder='John'
                      value={props.data.Products.name}
                      invalid={errors.name && true}
                      isdisabled="true"
                    />
                  {/* )
                }}
              /> */}
              {errors.name && <FormFeedback>Vui lòng nhập tên sản phẩm</FormFeedback>}
            </Col>
            <Col md={8} xs={12}>
              <Label className='form-label' for='code'>
                Mã sản phẩm
              </Label>
              {/* <Controller
                name='code'
                control={control}
                render={({ field }) => ( */}
                  <Input id='code' placeholder='Doe'value={props.data.Products.code} isdisabled="true"/>
                {/* )}
              /> */}
              {/* {errors.code && <FormFeedback>Mã sản phẩm chưa có</FormFeedback>} */}
            </Col>
            <Col md={4} xs={12} className="d-flex justify-content-center">
            <QRCode
              id='qrcode'
              value={props.data.Products.code}
              size={100}
              level={'H'}
              includeMargin={true}
            />
              {/* <img className='border-primary' src={img1} alt="" height="100" width="100" /> */}
            </Col>
            {/* <Col md={6} xs={12}>
              <Label className='form-label' for='type'>
                Phân loại
              </Label>
              <Select
                id='type'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={typeOptions}
                theme={selectThemeColors}
                defaultValue={typeOptions[0]}
                isDisabled={true}
              />
            </Col> */}
            <Col md={6} xs={12}>
              <Label className='form-label' for='lastName'>
                Phân loại
              </Label>
                <Input id='number' value={'Tốt'} isdisabled="true" />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='lastName'>
                Số lượng
              </Label>
                <Input id='number' value={100} isdisabled="true" />
            </Col>
            {/* <Col md={6} xs={12}>
              <Label className='form-label' for='type'>
                Gắn RFID
              </Label>
              <Select
                id='type'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={isRFID}
                theme={selectThemeColors}
                defaultValue={isRFID[0]}
                isDisabled={true}
              />
            </Col> */}
            <Col md={6} xs={12}>
              <Label className='form-label' for='price'>
                Gắn RFID
              </Label>
                <Input isdisabled="true" id='price' value={'Có'} />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='price'>
                Giá
              </Label>
                <Input isdisabled="true" id='price' value={new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.data.Products.price_in_retail)}  />
            </Col>
            <Col md={6} xs={12}>
              <PickerCustom isDisabled="true" title="Ngày sản xuất"/>
            </Col>
            <Col md={6} xs={12}>
              <PickerCustom isDisabled="true" title="Ngày hết hạn"/>
            </Col>
            <Col xs={12}>
              <TextareaCustom isdisabled="true" data={props.data.Products.description}/>
              {errors.describe && <FormFeedback>Please enter a valid Username</FormFeedback>}
            </Col>
            <Col sm='12'>
              <SwiperCoverflowCustom isShowEditButton={false} isRtl={isRtl} changeState={props.openImageModal} data={props.data.resources}/>
            </Col>
            {/* <Col xs='12'>
              <Label className='form-label'>
                Thành phần
              </Label>
              <ListGroupCustom />
            </Col> */}
            <Col xs={12}>
              <Label className='form-label' for='codeGradent'>
                Mã vườn
              </Label>
              {/* <Controller
                name='codeGradent'
                control={control}
                render={({ field }) => ( */}
                  <Input id='price' value={props.data.Products.farm_id} isdisabled="true"/>
                {/* )}
              /> */}
              {errors.codeGradent && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            {/* <Col md={6} xs={12}>
              <Label className='form-label' for='codeGradent'>
                Mã mùa vụ
              </Label>
                <Input {...field} id='price' placeholder='Doe' invalid={errors.codeGradent && true} disabled/>
            </Col> */}
            {/* <Col xs='12'>
              <Label className='form-label'>
                Địa điểm mua hàng
              </Label>
              <ListGroupCustom />
            </Col> */}
            <Col xs='12'>
              <Button  className='w-100' color='primary' outline onClick={props.openShowProductHistory}>
                Xem lịch sử sản phẩm
              </Button>
            </Col>
            <Col xs={12} className='text-center mt-2 pt-50'>
              {/* <Button type='submit' className='me-1' color='primary' >
                Áp dụng
              </Button> */}
              <Button type='reset' color='primary' onClick={props.changeState}>
              Quay lại
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ModalShowDetailProduct
