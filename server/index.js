const express = require('express')
const { json } = require('body-parser')
const mc = require('./controllers/messages_controller')

const app = express()
const port = 3001

app.use(json())
app.use(express.static('public/build'))

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

app.listen(port, console.log(`#### Listening on port ${port}...`))
