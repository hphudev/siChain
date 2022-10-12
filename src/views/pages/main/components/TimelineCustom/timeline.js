// ** Third Party Components
import Proptypes from 'prop-types'
import classnames from 'classnames'
import { Col, Row } from 'reactstrap'
import { User } from 'react-feather'

const Timeline = props => {

  // ** Props
  const { data, tag, className } = props

  // ** Custom Tagg
  const Tag = tag ? tag : 'ul'

  return (
    <Tag
      className={classnames('timeline', {
        [className]: className
      })}
    >
      {data.map((item, i) => {
        console.log(item)
        const ItemTag = item.tag ? item.tag : 'li'
        const date_for_buy = new Date(item.ProductHistory.created_at)
        const date_for_pay = new Date(item.ProductHistory.updated_at)
        return (
          <ItemTag
            key={i}
            className={classnames('timeline-item', {
              [item.className]: className
            })}
          >
            <span
              // className={classnames('timeline-point', {
              //   [`timeline-point-${item.color}`]: item.color,
              //   'timeline-point-indicator': !item.icon
              // })}
              className={classnames('timeline-point timeline-point-dark timeline-point-indicator')}
            >
              {item.icon ? item.icon : null}
            </span>
            <div className='timeline-event'>
              <div
                className={classnames('d-flex justify-content-between flex-sm-row flex-column', {
                  'mb-sm-0 mb-1': date_for_buy
                })}
              >
                {date_for_buy ? (
                  <span
                  className={classnames('timeline-event-time', {  
                    [item.metaClassName]: item.metaClassName
                  })}
                  >
                    Ngày mua: <b>{(`${`0${date_for_buy.getDate()}`.slice(-2)}-${`0${date_for_buy.getMonth() + 1}`.slice(-2)  }-${  date_for_buy.getFullYear()} ${`0${date_for_buy.getHours()}`.slice(-2)}:${`0${date_for_buy.getMinutes()}`.slice(-2)}:${`0${date_for_buy.getSeconds()}`.slice(-2)}`)}</b>
                  </span>
                ) : null} 
                {/* {item.meta ? (
                  <span
                  className={classnames('timeline-event-time', {
                    [item.metaClassName]: item.metaClassName
                  })} 
                  >
                  {item.meta}
                  </span>
                ) : null} */}
              </div>
              <div
                className={classnames('d-flex justify-content-between flex-sm-row flex-column', {
                  'mb-sm-0 mb-1': date_for_pay
                })}
              >
                {date_for_pay ? (
                  <span
                  className={classnames('timeline-event-time', {  
                    [item.metaClassName]: item.metaClassName
                  })}
                  >
                    Ngày thanh toán: <b>{(` ${`0${date_for_pay.getDate()}`.slice(-2)  }-${`0${date_for_pay.getMonth() + 1}`.slice(-2)  }-${  date_for_pay.getFullYear()} ${`0${date_for_pay.getHours()}`.slice(-2)}:${`0${date_for_pay.getMinutes()}`.slice(-2)}:${`0${date_for_pay.getSeconds()}`.slice(-2)}`)}</b> 
                  </span>
                ) : null} 
                {/* {item.meta ? (
                  <span
                  className={classnames('timeline-event-time', {
                    [item.metaClassName]: item.metaClassName
                  })} 
                  >
                  {item.meta}
                  </span>
                ) : null} */}
              </div>
              <h6 className='pt-1'>ID: <span className='text-danger'>{item.ProductHistory.id}</span></h6>
              <Row>
                <Col sm="6">
                  <div className='d-flex flex-column'>
                    <span className='fw-bolder'>
                      <User size={16} className="me-1"/>
                      Người bán 
                      <span className=''>
                      {
                        (item.seller_parent !== null) ? (' (Tài khoản con)') : ('')
                      }
                      </span>
                    </span>
                    <span className='text-truncate mb-0'>Họ tên: <span className='text-warning'>{(item.seller_name !== null) ? item.seller_name : "chưa có"}</span></span>
                    <span className='text-truncate mb-0'>Địa chỉ: <span className='text-warning'>{(item.seller_address !== null) ? item.seller_address : "chưa có"}</span></span>
                    <span className='text-truncate mb-0'>Email: <span className='text-warning'>{(item.seller_email !== null) ? item.seller_email : "chưa có"}</span></span>
                    {
                      (item.seller_parent !== null) ? (
                        <span className='text-truncate mb-0'>Email tài khoản gốc: <span className='text-warning'>{(item.seller_parent.email !== null) ? item.seller_parent.email : "chưa có"}</span></span>
                      ) : ''
                    }
                  </div>
                </Col>
                <Col sm="6">
                  <div className='d-flex flex-column'>
                    <span className='fw-bolder'>
                      <User size={16} className="me-1"/>
                      Người mua 
                      <span className=''>
                        {
                          (item.buyer_parent !== null) ? (' (Tài khoản con)') : ('')
                        }
                      </span>
                    </span>
                    <span className='text-truncate mb-0'>Họ tên: <span className='text-warning'>{(item.buyer_name !== null) ? item.buyer_name : "chưa có"}</span></span>
                    <span className='text-truncate mb-0'>Địa chỉ: <span className='text-warning'>{(item.buyer_address !== null) ? item.buyer_address : "chưa có"}</span></span>
                    <span className='text-truncate mb-0'>Email: <span className='text-warning'>{(item.buyer_email !== null) ? item.buyer_email : "chưa có"}</span></span>
                    {
                      (item.buyer_parent !== null) ? (
                        <span className='text-truncate mb-0'>Email tài khoản gốc: <span className='text-warning'>{(item.buyer_parent.email !== null) ? item.buyer_parent.email : "chưa có"}</span></span>
                      ) : ''
                    }
                  </div>
                </Col>
              </Row>
              {/* <div className='d-flex justify-content-around align-items-center'>
                <div className='d-flex flex-column'>
                  <span className='fw-bolder'>Người gửi</span>
                  <span className='text-truncate mb-0'>{item.userFrom.name}</span>
                  <span className='text-truncate text-warning mb-0'>{item.userFrom.Role.description}</span>
                </div>
                <div className='d-flex flex-column'>
                  <span className='fw-bolder'>Người nhận</span>
                  <span className='text-truncate mb-0'>{item.userFrom.name}</span>
                  <span className='text-truncate text-warning mb-0'>{item.userFrom.Role.description}</span>
                </div>
              </div> */}
              {/* <h6 className='pt-1'>Người gửi</h6>
              <div className='text-dark mt-1 ps-1'>Họ và tên: <span className='text-success'>{item.userFrom.name}</span></div>
              <div className='text-dark mt-1 ps-1'>Email: <span className='text-success'>{item.userFrom.email}</span></div>
              <div className='text-dark mt-1 ps-1'>Vai trò: <span className='text-success'>{item.userFrom.Role.description}</span></div>
              <h6 className='pt-1'>Người nhận</h6>
              <div className='text-dark mt-1 ps-1'>Họ và tên: <span className='text-success'>{item.userTo.name}</span></div>
              <div className='text-dark mt-1 ps-1'>Email: <span className='text-success'>{item.userTo.email}</span></div>
              <div className='text-dark mt-1 ps-1'>Vai trò: <span className='text-success'>{item.userTo.Role.description}</span></div> */}
              <p
                className={classnames({
                  'mb-0': i === data.length - 1 && !item.customContent
                })}
              >
                {item.content}
              </p>
              {item.customContent ? item.customContent : null}
            </div>
          </ItemTag>
        )
      })}
    </Tag>
  )
}

export default Timeline

// ** PropTypes
Timeline.propTypes = {
  tag: Proptypes.string,
  className: Proptypes.string,
  data: Proptypes.array.isRequired
}
