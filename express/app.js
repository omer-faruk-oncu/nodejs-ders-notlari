'use strict'

/*---------------*/
const express = require('express')
const app = express()
/*---------------*/

// app.get('/', (req, res) => { res.end('app.get çalıştı')})
// app.post('/', (req, res) => { res.end('app.post çalıştı')})
// app.put('/', (req, res) => { res.end('app.put çalıştı')})
// app.delete('/', (req, res) => { res.end('app.delete çalıştı')})
//app.all('/', (req, res) => { res.end('app.all çalıştı')})

// app.route('/')
//     .get((req, res) => { res.end('app.route get çalıştı')})
//     .post((req, res) => { res.end('app.route post çalıştı')})
//     .put((req, res) => { res.end('app.route put çalıştı')})
//     .delete((req, res) => { res.end('app.route delete çalıştı')})

//app.get('/path', (req, res) => { res.send('burası path')})

app.get(/^\/xyz/, (req, res) => { res.send('now in here: /xyz$/')})


/*---------------*/
/*---------------*/

require('dotenv').config()
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('Running: http://127.0.0.1' + PORT)
})
/*---------------*/



