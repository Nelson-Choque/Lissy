let mysql = require('mysql2');

let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '1234',
    database : 'lissydb'
  });

  
connection.connect( (e)=>{

    if(e){
        console.log("error",e)
        return
    
    }

    console.log("conexion establecido");
    
} )

module.exports = connection;