const express = require ('express')
const db = require('../inventions.json')
const router = express.Router()

router.get('/', (req, res)=> {
    db.query('SELECT * FROM inventions', (err, inventions) => {
        if (err) {
            console.err(err)
            return res.status(500).json({error: 'incorrect query'})
        }
        console.log(inventions)
        res.json(inventions)
    })
})

module.exports = router