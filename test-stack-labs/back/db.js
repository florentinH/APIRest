const mysql = require ('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'stacklabs_inventions'
})

module.exports = connection