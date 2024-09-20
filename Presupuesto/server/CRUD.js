const pool = require("./conection.js");

class CRUD
{
    constructor(){}

    async insert(table, parameters)
    {
        if(!table || !parameters || Object.keys(parameters).length === 0){
            throw new Error('Los parametros no pueden estar vacios');
        }
        
        let conn;
        let keys = Object.keys(parameters);
        let values = Object.values(parameters);

        let keyString = keys.join(", "); //Permite unir el enunciado en una cadena separada por comas
        let placeHolder = keys.map(()=> '?').join(", "); //Genero placeHolders para evitar inyeccion de sql
        
        const query = `INSERT INTO ${table} (${keyString}) VALUES (${placeHolder})`;

        console.log(query);

        try{
            conn = await pool.getConnection();
            const[rows, fields] = await conn.execute(query, values);

            console.log(rows);
            console.log("Insert ejecutado");

        }catch(err){
            console.log('Error ejecutando la consulta', err);
        }finally{
            if(conn) conn.release();
        }
        
    }

    async select(table, cells, conditionals)
    {
        if(!table){
            throw new Error('Los parametros no pueden estar vacios');
        }

        let conn;
        let sql = `SELECT `

        if(cells && Array.isArray(cells)){
            const cellString = cells.toString();

            sql += `${cellString} `;
        }
        else{
            sql += `* `;
        }

        sql += ` FROM ${table} WHERE 1 = 1 `;

        if(conditionals){
            for(const [key, value] of Object.entries(conditionals))
            {
                if(typeof value === "string")
                {
                    sql += ` AND ${key} LIKE %${value}%`;
                }
                else
                {
                    sql += ` AND ${key} = ${value}`;
                }
            }
        }
    }

}