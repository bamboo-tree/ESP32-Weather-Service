import React, { useState } from 'react'
import axios from 'axios'
import './style.css'

const ToggleButton = ({ label }) => {
  const [buttonState, setButtonState] = useState(false)

  // toggle button state (on - off)
  const toggle = () => {
    setButtonState(!buttonState)
    handleSubmit()
  }

  const handleSubmit = (event) => {
    const newPost = {
      buttonState
    }
    axios.get(`http://192.168.1.42:8080/iot/temperature`)
  };


  return (
    <div>
      <button className={buttonState ? "on" : "off"} onClick={handleSubmit}>{label}</button>
    </div >
  )
}

export default ToggleButton