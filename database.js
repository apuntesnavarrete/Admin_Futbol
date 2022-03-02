var mysql = require('mysql');
const {database } = require('./keys')
const {promisify} = require('util');



var pool  = mysql.createPool(database);
 
pool.getConnection((err, connection) =>{
  if (connection) connection.release();
console.log('Base de datos conectada');
return

})
pool.query = promisify(pool.query); 
module.exports = pool;