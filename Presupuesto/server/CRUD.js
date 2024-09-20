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
            await conn.execute(query, values);

            //console.log(rows);
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
        let query = `SELECT `;

        if(cells && Array.isArray(cells)){
            const cellString = cells.toString();

            query += `${cellString} `;
        }
        else{
            query += `* `;
        }

        query += ` FROM ${table} WHERE 1 = 1 `;

        if(conditionals){
            for(const [key, value] of Object.entries(conditionals))
            {
                if(typeof value === "string")
                {
                    query += ` AND ${key} LIKE %${value}%`;
                }
                else
                {
                    query += ` AND ${key} = ${value}`;
                }
            }
        }

        try{
            conn = await pool.getConnection();
            const[rows] = await conn.execute(query);

            console.log(rows);
            console.log('Consulta ejecutada');

        }catch(err){
            console.log("Hubo un error en el select", err);
        }finally{
            if(conn) conn.release();
        }
    }

    async delete(table, conditionals)
    {
        if(!table || !conditionals || Object.keys(conditionals).length === 0){
            throw new Error('Los parametros no pueden estar vacios');
        }

        let conn;
        let query = `DELETE FROM ${table} WHERE 1 = 1`;

        for(const [key, value] of Object.entries(conditionals))
        {
            if(typeof value === "string")
            {
                query += ` AND ${key} LIKE '${value}' `;
            }
            else
            {
                query += ` AND ${key} = ${value}`;
            }
        }

        try{
            conn = await pool.getConnection();
            await conn.execute(query);

            console.log('Consulta ejecutada');

        }catch(err){
            console.log("Hubo un error en el delete", err);
        }finally{
            if(conn) conn.release();
        }
    }
}   