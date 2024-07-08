"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))
app.all('/:id', (req,res)=>{
    res.send({
        params:req.params,
        query:req.query,
        headers:req.headers,
        body:req.body
    })
})

app.use('/images', express.static('./images'))

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));