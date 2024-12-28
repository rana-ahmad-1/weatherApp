import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios'
import Wcard from '../Wcard/Wcard';
const Home = () => {

    const [cityName, setCityName] =useState("")
    const [data, setData]= useState ([])

    const handleWeather= async (e)=>{
        e.preventDefault();

        console.log("Your function calling")

        try{

            let response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=cc709938c8f34514a57113722242208&q=${cityName}&aqi=yes`);
            console.log('response:', response)
            setData([response.data])

                }catch(error){
                    console.log('your api is wrong', error)
}
}
  return (
    <div>
      <h1>Check Your City Weather</h1>

      <form onSubmit={handleWeather}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City Name:</Form.Label>
        <Form.Control type="text"
         placeholder="Enter your city name" 
         onChange={(e)=>{ setCityName (e.target.value)}}
         />
      </Form.Group>
      <Button variant="primary" type="submit" >
        Submit
      </Button>
      </form>
      {
       data.map((eachForcast, index) => (
        <Wcard
            key={index}
            name_w={eachForcast.location.name}
            date={eachForcast.location.localtime}
            temp_c={eachForcast.current.temp_c}
            temp_f={eachForcast.current.temp_f}
        />
    ))
      }
    </div>
  )
}

export default Home
