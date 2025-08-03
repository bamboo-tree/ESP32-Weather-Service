require('dotenv').config()
const express = require('express')
const router = express.Router()

// POST /iot/temperature
router.post("/temperature", (req, res) => {
  try {
    const { value } = req.body
    console.log(`TEMPERATURE: ${value}`)
    res.status(200).json({ message: "Temperature received" })
  }
  catch (err) {
    console.log("Failed to get temperature", err)
    res.status(500).json({ message: "Internal server error" })
  }
})

// POST /iot/humidity
router.post("/humidity", (req, res) => {
  try {
    const { value } = req.body
    console.log(`HUMIDITY: ${value}`)
    res.status(200).json({ message: "Humidity received" })
  }
  catch (err) {
    console.log("Failed to get humidity", err)
    res.status(500).json({ message: "Internal server error" })
  }
})

// GET /iot/temperature
router.get('/temperature', async (req, res) => {
  try {
    const mockResponse = {
      data: {
        value: 23
      }
    }
    res.json({ data: mockResponse.data.value })

    // const response = await axios.get(`http://${process.env.ESP_IP}/temperature`);
    // console.log(`TEMPERATURE: ${response.data}`)
    // res.json({ data: response.data });
  } catch (error) {
    console.error("Failed to get temperature", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET /iot/humidity
router.get('/humidity', async (req, res) => {
  try {
    const mockResponse = {
      data: {
        value: 87
      }
    }
    res.json({ data: mockResponse.data.value })

    // const response = await axios.get(`http://${process.env.ESP_IP}/humidity`);
    // console.log(`HUMIDITY: ${response.data}`)
    // res.json({ data: response.data });
  } catch (error) {
    console.error("Failed to get humidity", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router