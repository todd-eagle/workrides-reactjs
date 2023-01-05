require('dotenv').config()
const express = require('express')
var cors = require('cors')
const path = require('path');
const {SERVER_PORT} = process.env
const content = require('./controllers/content')
const mail = require('./controllers/mail')

const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "..", "build")))

app.listen( SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`))

app.get('/api/content/:pageid', content.getContent)
app.post('/api/mail', mail.sendMail)

app.get('*', function(req, res) {
  res.sendFile('index.html',{root: path.join(__dirname, "..", "build")}, function(err) {
    if (err) {
      console.log('Error: ', err)
      res.status(500).send(err)
    }
  })
})