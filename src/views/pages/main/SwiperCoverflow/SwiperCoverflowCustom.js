// import {lazy} from 'react'
// ** Third Party Components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Button } from 'reactstrap'

import jwtDefaultConfig from "@src/@core/auth/jwt/jwtDefaultConfig"

// ** Images
// const  img_none = lazy(() => import('@src/assets/images/banner/banner-none.webp')) 
import img_none from '@src/assets/images/banner/banner-none.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import img1 from '@src/assets/images/banner/banner-35.jpg'
// import img2 from '@src/assets/images/banner/banner-39.jpg'
// import img3 from '@src/assets/images/banner/banner-38.jpg'
// import img4 from '@src/assets/images/banner/banner-37.jpg'
// import img5 from '@src/assets/images/banner/banner-36.jpg'
// import img6 from '@src/assets/images/banner/banner-34.jpg'
// import img7 from '@src/assets/images/banner/banner-33.jpg'
// import img8 from '@src/assets/images/banner/banner-32.jpg'
// import img9 from '@src/assets/images/banner/banner-31.jpg'

const params = {
  effect: 'coverflow',
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    clickable: true
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }
}

const SwiperCoverflowCustom = ({ isRtl, changeState, isShowEditButton, data}) => {

  const handleReplaceImage = (error) => {
    error.target.onerror = null
    error.target.src = img_none
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>
          Hình ảnh sản phẩm 
          <span>
            <Button style={{
              visibility: isShowEditButton ? 'visible' : 'hidden'
            }} type='reset' className='ms-1 btn-sm' color='dark' onClick={changeState}>
              Chỉnh sửa
            </Button>
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Swiper dir={isRtl ? 'rtl' : 'ltr'} {...params}>
          {
            (data !== null && data.length === 0) ? (
              <SwiperSlide>
                <img src={img_none} alt='swiper 1' className='img-fluid' style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}/>
              </SwiperSlide>
            ) : (
              data.map((item, index) => (
                <SwiperSlide 
                  key={index}
                >
                  <LazyLoadImage 
                    src={`${jwtDefaultConfig.endPoint}${item.file_path}`}
                    width='100%' height='200px'
                    style={{
                      objectFit: 'fit'
                    }}
                    onError={handleReplaceImage}
                  />
                  {/* <img src={`https://sichain.herokuapp.com${item.file_path}`} className='img-fluid' style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                    onError={handleReplaceImage}
                  /> */}
                </SwiperSlide>
              ))
            )
          }
        </Swiper>
      </CardBody>
    </Card>
  )
}

export default SwiperCoverflowCustom
