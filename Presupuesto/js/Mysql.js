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

async function getData()
{
    let conn;
    try{
        conn = await pool.getConnection();

        const [rows, fields] = await conn.execute('SELECT * FROM cuenta');

        console.log(rows);
    } catch(err){
        console.log('Error ejecutando la consulta: ', err);
    } finally{
        if(conn) conn.release();
    }
}

getData();