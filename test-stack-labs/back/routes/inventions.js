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

router.post('/', (req, res) => {
    const {date, name, inventor, origin, site} = req.body
    const query = 'INSERT INTO inventions (date, name, inventor, origin, site) VALUES (?, ?, ?, ?, ?)'
    const selectQuery = 'SELECT * from inventions WHERE id = ?'
    db.query(query, [date, name, inventor, origin, site], (err, result) => {
      if (err) {
        console.error(err)
        return res.status(500).json({error: 'Database query failed'})
      }
      db.query(selectQuery, [result.insertId], (err, inventions) => {
        if (err) {
          console.error(err)
          return res.status(500).json({error: 'Database query failed'})
        }
  
        res.json(inventions[0])
      })
    })
  })

module.exports = router