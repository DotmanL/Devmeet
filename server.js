const express = require('express')
const connectDB = require('./config/db')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

if (process.env.NODE_ENV !== 'production') require('dotenv').config()

//Connect Database
connectDB()

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

//Define Routes

app.use('/api/users', require('./routes/api/users'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))

//serve assets for production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5002

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
