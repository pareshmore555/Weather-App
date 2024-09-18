
import { useState } from "react";
import axios  from "axios";


function File1(){

 const [data,setData]=  useState("")
 const [city,setCity]=  useState("")
 


 const apikey="238e63304883da0d74ed9b5de621b1ab";

 function handleapi(){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
             .then(res=>setData(res.data))
    
 }
 console.log(city)
  console.log(data)
    return(
      <div style={{display:"flex",flexDirection:"column", gap:"20px",marginBottom:"400px"}}>
        <input type="text" value={city}  style={{ width: '200px', height: '30px' }} onChange={(e)=>setCity(e.target.value)}/>
        <button onClick={handleapi}>Enter</button>
        <div>
          <h2>{data.name}</h2>
          <p>Main Weather :{data.weather[0].main}</p>
          <p>Temperature: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>
          <p>Temperature Max: {data.main.temp_max}°C</p>
          <p>Temperature Min: {data.main.temp_min}°C</p>
          
        </div>
      </div>
    )
}
export default File1;