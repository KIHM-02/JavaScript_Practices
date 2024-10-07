const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'presupuesto',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});


module.exports = pool; //En node.js nos permite exportar el pool de conexiones para poder usarlo en otros archivos