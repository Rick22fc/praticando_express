import express from 'express'

const app = express()
const port = 3000

app.use(express.json())

app.get("/",(req,res) => {
    res.json("Hello World")
})

app.listen(port, () =>{
    console.log(`Seja bem vindo a minha APIhttp://localhost:${port}`);
})
