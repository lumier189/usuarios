const express = require("express");
const app = express();

app.get(
    "/home",
    (req, res)=>{
        res.send("Pagina home a ser exibida...")
    }
);

app.listen(3000,()=>{console.log("Servidor rodando na porta 3000")});