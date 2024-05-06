require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const taskRouter = require('./routers/task-router')

const PORT = process.env.PORT || 3000

try {
  console.log(`Connecting to ${process.env.MONGODB_URI}`)
  mongoose.connect(process.env.MONGODB_URI)
  console.log('Successfully connected to MongoDB')
} catch (err) {
  console.error('Error connecting to MongoDB:', err)
}

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/tasks', taskRouter)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
