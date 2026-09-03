import express from 'express'
import { pool } from './database/db.js'

const app = express()
const port = 3000

app.use(express.json())

app.get("/",(req,res) => {
    res.json("Hello World")
})

app.get("/frutas", async (req, res) =>{
    try{
        const response = await pool.query("SELECT * FROM frutas");
        res.json(response.rows);
    } catch(error){
        console.log.error(error);
    }
});

app.listen(port, () =>{
    console.log(`Seja bem vindo a minha API http://localhost:${port}`);
});
