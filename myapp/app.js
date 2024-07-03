'use strict';

const express = require('express');
const app = express();

const users = [
    {name:'Anson', age:22},
    {name:'omer', age:27},
    {name:'met', age:29}
]

const posts = [
    {title:'My favorite foods'}
]

app.get('/', (req, res)=> {
     res.send({
        msg: 'Hello',
        user: {}
        })
  });

  app.get('/users', (req, res)=> {
     res.send(users)
  });
  
  app.get('/posts', (req, res)=> {
     res.send(posts)
  });

  app.get('/users/:name', (req, res)=> {
     console.log(req.params)
     
  });

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})
