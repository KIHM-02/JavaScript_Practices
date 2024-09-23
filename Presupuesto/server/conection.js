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