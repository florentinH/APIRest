const mysql = require ('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'stack',
    password: 'stack',
    database: 'stacklabs_inventions'
})

module.exports = connection