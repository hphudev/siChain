// ** React Imports
import { Fragment } from 'react'

//  **Component
import FileUploaderCustom from '../FileUploaderCustom/FileUploaderCustom'
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

const ModalEditProductImage = (props) => {

  // const [isRtl] = useRTL()
  // ** States
  // const [show, setShow] = useState(false)
  // console.log('render ', props.isShow)
  // ** Hooks
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

  return (
    <Fragment>
      <Modal isOpen={props.isShow} toggle={() => props.changeState()} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => props.changeState()}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Thay đổi hình ảnh sản phẩm</h1>
            <p>Hình ảnh sản phẩm sẽ bị thay đổi khi được gửi lên.</p>
          </div>
          {/* <Row tag='form' className='gy-1 pt-75' onSubmit={handleSubmit(onSubmit)}>
            <Col md={6} xs={12}>
              <Label className='form-label' for='name'>
                Tên sản phẩm
              </Label>
              <Controller
                control={control}
                name='name'
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      id='name'
                      placeholder='John'
                      value={field.value}
                      invalid={errors.name && true}
                    />
                  )
                }}
              />
              {errors.name && <FormFeedback>Vui lòng nhập tên sản phẩm</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='code'>
                Mã sản phẩm
              </Label>
              <Controller
                name='code'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='code' placeholder='Doe' invalid={errors.code && true} />
                )}
              />
              {errors.code && <FormFeedback>Mã sản phẩm chưa có</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
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
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='lastName'>
                Số lượng
              </Label>
              <Controller
                name='number'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='number' placeholder='Doe' invalid={errors.number && true} />
                )}
              />
              {errors.number && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='type'>
                Phân loại
              </Label>
              <Select
                id='type'
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
                options={isRFID}
                theme={selectThemeColors}
                defaultValue={isRFID[0]}
              />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='price'>
                Giá
              </Label>
              <Controller
                name='price'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='price' placeholder='Doe' invalid={errors.price && true} />
                )}
              />
              {errors.price && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <PickerCustom title="Ngày sản xuất"/>
            </Col>
            <Col md={6} xs={12}>
              <PickerCustom title="Ngày hết hạn"/>
            </Col>
            <Col xs={12}>
              <TextareaCustom />
              {errors.describe && <FormFeedback>Please enter a valid Username</FormFeedback>}
            </Col>
            <Col sm='12'>
              <SwiperCoverflowCustom isRtl={isRtl} />
            </Col>
            <Col xs='12'>
              <Label className='form-label'>
                Thành phần
                <span>
                  <Button className='ms-1 btn-sm' color='dark'>
                    Chỉnh sửa
                  </Button>
                </span>
              </Label>
              <ListGroupCustom />
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='codeGradent'>
                Mã vườn
              </Label>
              <Controller
                name='codeGradent'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='price' placeholder='Doe' invalid={errors.codeGradent && true} />
                )}
              />
              {errors.codeGradent && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            <Col md={6} xs={12}>
              <Label className='form-label' for='codeGradent'>
                Mã mùa vụ
              </Label>
              <Controller
                name='codeGradent'
                control={control}
                render={({ field }) => (
                  <Input {...field} id='price' placeholder='Doe' invalid={errors.codeGradent && true} />
                )}
              />
              {errors.codeGradent && <FormFeedback>Please enter a valid Last Name</FormFeedback>}
            </Col>
            <Col xs='12'>
              <Label className='form-label'>
                Địa điểm mua hàng
                <span>
                  <Button className='ms-1 btn-sm' color='dark'>
                    Chỉnh sửa
                  </Button>
                </span>
              </Label>
              <ListGroupCustom />
            </Col>
            <Col s='12'>
              <Button  className='ms-1 w-100' color='primary' outline>
                Xem lịch sử sản phẩm
              </Button>
            </Col>
            <Col xs={12} className='text-center mt-2 pt-50'>
              <Button type='submit' className='me-1' color='primary' >
                Áp dụng
              </Button>
              <Button type='reset' color='secondary' outline onClick={props.changeState}>
                Hủy
              </Button>
            </Col>
          </Row> */}
          <FileUploaderCustom />
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ModalEditProductImage
