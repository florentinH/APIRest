const express = require('express')
const app = express()
const inventionsRouter = require ('./routes/inventions')


app.use('/api/inventions', inventionsRouter)

console.log('Listening on port 5000') 
app.listen(5000)