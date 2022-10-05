// ** React Imports
import { Fragment } from 'react'

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
  ModalFooter
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
import FormInputRepeatCustom from '../FormInputRepeatCustom/FormInputRepeatCustom'
import FormInputRepeatShoppingPlace from '../FormInputRepeatShoppingPlace/FormInputRepeatShoppingPlace'

// ** Swiper
// ** Init Swiper Functions
SwiperCore.use([Navigation, Grid, Pagination, EffectFade, EffectCube, EffectCoverflow, Autoplay, Lazy, Virtual])


const ModalEditShoppingPlace = (props) => {


  return (
    <Fragment>
     <Modal isOpen={props.isShow} toggle={() => props.changeState()} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => props.changeState()}></ModalHeader>
        <ModalBody className='px-sm-5 mx-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Thay đổi địa điểm mua sản phẩm</h1>
            <p>Thông tin địa điểm sẽ được thay đổi khi được gửi lên.</p>
          </div>
          <FormInputRepeatShoppingPlace/>
          <Row tag='form' className='gy-1 pt-75'>
          <Col xs={12} className='text-center mt-2 pt-50'>
              <Button type='submit' className='me-1' color='primary' >
                Áp dụng
              </Button>
              <Button type='reset' color='secondary' outline onClick={props.changeState}>
                Hủy
              </Button>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default ModalEditShoppingPlace
