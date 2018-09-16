const express = require('express')
const bodyParser = require('body-parser')
const originalInventions = require('./inventions.json')
const app = express()
// const inventionsRouter = require ('./routes/inventions')

originalInventions.forEach((invention, index) => {
    invention.id = index + 1
})

let inventions = [...originalInventions]
let nextId = inventions.length + 1 



app.use(bodyParser.json())

const compareinvention = (a, b) => {
    if (a.date < b.date){
        return -1;
    }
    if (a.date > b.date){ 
        return 1;
    }
    if(a.name < b.name) {
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
 // a doit être égal à b
 return 0;
}


app.get('/inventions', (req, res) => {
    inventions.sort(compareinvention)
    res.json(inventions)
})

app.post('/inventions', (req, res) => {
    const id = nextId
    nextId += 1
    const newInvention = req.body
    newInvention.id = id
    inventions.push(newInvention)
})

app.put('/inventions/init', (req, res) => {
    inventions = [...originalInventions]
    nextId = inventions.length + 1 
})

app.delete('/inventions/:id', (req, res) => {
    
    const id = req.params.id
    const index = inventions.findIndex(invention => {
        return invention.id === id
    })
    inventions.splice(index, 1)
})


console.log('Listening on port 5000') 
app.listen(5000)