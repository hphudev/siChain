// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label } from 'reactstrap'

const TextareaCustom = ({data}) => {
  return (
      <div className='form-floating mt-2'>
        <Input
          type='textarea'
          name='text'
          id='floating-textarea'
          placeholder='Floating Label'
          style={{ minHeight: '250px' }}
          value={data}
        />
        <Label className='form-label' for='floating-textarea'>
          Mô tả
        </Label>
      </div>
  )
}
export default TextareaCustom
