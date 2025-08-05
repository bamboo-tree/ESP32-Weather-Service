import React, { useState } from 'react'
import axios from 'axios'
import './style.css'

const Button = ({ label }) => {
  const [temperature, setTemperature] = useState(null)

  const handleClick = async () => {
    try {
      const response = await axios.get('http://192.168.1.42:8080/iot/temperature') // update IP!
      setTemperature(response.data.data)
      console.log("Temperature received from API:", response.data.data)
    } catch (error) {
      console.error("Error fetching temperature:", error)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>{label}</button>
      {temperature !== null && (
        <p>Temperature: {temperature}°C</p>
      )}
    </div>
  )
}

export default Button