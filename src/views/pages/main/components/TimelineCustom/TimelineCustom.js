// ** Custom Components
import Timeline from './timeline'

// ** Reactstrap Imports
import { Card, CardBody, CardHeader, CardTitle, Spinner } from 'reactstrap'

// ** Timeline Data
// import { basicData } from './data'

const TimelineCustom = (props) => {
  const {data} = props
  return (
    <div>
      <Timeline data={data} />
    </div>
  )
}

export default TimelineCustom
