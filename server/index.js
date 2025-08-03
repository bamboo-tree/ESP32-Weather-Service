require('dotenv').config()
const express = require('express')
const app = express()
const defaultRoute = require('./routes/default')
const iotRoute = require('./routes/iot')

app.use(express.json())
app.use('/default', defaultRoute) // useless
app.use('/iot', iotRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`ESP server working on port ${PORT}`)
})

