let mysql = require('mysql')

module.exports = () => {

    let connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database: ''
      })
      
    connection.connect()

    return connection
}