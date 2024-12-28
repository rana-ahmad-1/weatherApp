import moment from 'moment'
import Card from 'react-bootstrap/Card';

const Wcard = ({name_w,date,temp_c, temp_f }) => {
  return (
    <div>
          <Card className="mt-3 ms-2"
          style={{ width: '18rem', textAlign:'center' }}>
      <Card.Body>
      <Card.Title><h1>{name_w}</h1></Card.Title>
        <Card.Title>{moment(date).format('MMMM Do YYYY, h:mm:ss a')}</Card.Title>
        <Card.Text>
          <h1>{temp_c}°C</h1>
        </Card.Text>
        <Card.Text>
          <h1>{temp_f}°F</h1>
        </Card.Text>
      </Card.Body>
    </Card>


    </div>
  )
}

export default Wcard
