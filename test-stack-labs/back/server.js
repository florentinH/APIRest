const express = require('express')
const path = require('path')
const app = express()
const inventionsRouter = require ('./routes/inventions')
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/api/inventions', InventionsRouter)
 
app.listen(5000)