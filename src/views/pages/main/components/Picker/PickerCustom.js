// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'

const PickerCustom = (props) => {
  // ** State
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      <Label className='form-label' for='default-picker'>
        {props.title}
      </Label>
      <Flatpickr className='form-control' value={picker} onChange={date => setPicker(date)} id='default-picker' disabled={props.isDisabled}/>
    </Fragment>
  )
}

export default PickerCustom
