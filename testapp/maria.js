const maria = require('mysql');
const conn = maria.createConnection({
    host : 'localhost',
    port:3306,
    user :'testUser',
    password:'test12',
    database:'testDB'
});
module.exports = conn;