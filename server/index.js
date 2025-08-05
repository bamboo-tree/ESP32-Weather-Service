require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const iotRoute = require('./routes/iot')

// specify cors whitelist
const corsOptions = {
  origin: [`http://${process.env.CLIENT_IP}:${process.env.CLIENT_PORT}`],
  methods: ["GET", "POST"]
};
app.use(cors(corsOptions))

app.use(express.json())
app.use('/iot', iotRoute)

const PORT = process.env.SERVER_PORT
app.listen(PORT, () => {
  console.log(`ESP server working on port ${PORT}`)
})

