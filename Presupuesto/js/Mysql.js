const mysql = requires('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: '',
    database: 'presupuesto',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});


