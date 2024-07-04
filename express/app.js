'use strict'


const express = require('express')
const app = express()

require('dotenv').config()


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Running: http://127.0.0.1' + PORT)
})

app.get('/', (req,res)=>{
    //res.end('app.get çalıstı')

    const obj = {
        error:false,
        message:'welcome'
    }

    //res.end(JSON.stringify(obj))
    res.send(obj)

})


