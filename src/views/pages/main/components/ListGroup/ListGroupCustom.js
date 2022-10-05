import { ListGroup, ListGroupItem } from 'reactstrap'
import { Label } from 'recharts'

const ListGroupCustom = () => {
  return (
    <ListGroup 
      className='mt-1'
      style={{
        height: '250px',
        overflow: 'auto',
        textAlign: 'center'
      }}>
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Morbi leo risus</ListGroupItem>
      <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
  )
}
export default ListGroupCustom
  