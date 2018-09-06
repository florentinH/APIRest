const mysql = require ('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'stacklabs_inventions'
})

module.exports = connection