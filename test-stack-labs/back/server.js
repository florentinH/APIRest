const express = require('express')
const path = require('path')
const app = express()
const inventionsRouter = require ('./routes/inventions')
const inventions = require ('./inventions.json')
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/inventions', (req, res) => {
  res.json(inventions)
})

app.use('/api/inventions', inventionsRouter)

console.log('Listening on port 5000') 
app.listen(5000)