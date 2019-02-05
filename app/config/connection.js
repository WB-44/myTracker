const mysql = require('mysql');

module.exports = class Connection {

    sqlConnection(){
      let dbCo = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "vulCain2.1",
        database: "mytracker"
      });
      
      return dbCo;
    }
}