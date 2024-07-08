"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *

app.get("/user/:id", (req, res,next) => {
  try {
    if (isNaN(req.params.id)) {
      throw new Error("ID sayı olmalı");
    } else {
      res.status(200).send({
        error: false,
        message: "ID doğru",
      });
    }
  } catch (error) {
    next(error);
  }
});

/* ------------------------------------------------------- */

const asyncFunction = async() =>{
    throw new Error ('async-error')
}

app.get('/async', async (req,res, next)=>{
    await asyncFunction()
        .then()
        .catch((err)=>{
            next(err)
        })
})
/* ------------------------------------------------------- *

app.get("/user/:id", (req, res) => {
  //throw new Error('bu bir hata')

  // req.send({
  //     id:req.params.id,
  //     message: 'Hello world'
  // })

  
    if (isNaN(req.params.id)) {
        
        res.errorStatusCode = 400

        throw new Error("ID sayı olmalı");

    } else {

      res.send("ID doğru")

    }
})
    
  
  
  
  /* ------------------------------------------------------- */

const errorHandler = (error, req, res, next) => {
  console.log("error handler çalıştı");

  const statusCode = res?.errorStatusCode || 500;
  res.status(statusCode).send({
    error: true,
    message: error.message,
  });
};

app.use(errorHandler);

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
