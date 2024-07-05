"use strict";

const express = require("express");
const app = express();
const PORT = 8000;

const router = express.Router();
app.use(router);

/*------------------------------------------------*

//? 9. soru
app.get('/', (req,res, next)=>{
    res.send({
        method:req.method,
        url:req.url
    })
    next()
})
/*------------------------------------------------*

//? 10. soru

app.get('/sum', (req, res) => {
    const { num1, num2 } = req.query;
    const sum = parseInt(num1) + parseInt(num2);
    res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
});

/*------------------------------------------------*/

//* PART 2

/*------------------------------------------------*

//? 1.SORU a



router.get(/\/abc|\/acd/, (req, res) => {
    res.send("<h1>path matched</h1");
})


/*------------------------------------------------*

//? 1.SORU b 



// router.get(/\/a\d{1}c{2}|\/a\d{1}c{3}/, (req, res) => {
    //     res.send("path matched");
    // })
    
    router.get(/\/a\d{1}c{2,3}/, (req, res) => {
        res.send("<h1>path matched</h1>");
    });
    
    
    /*------------------------------------------------*

//? 1.SORU c
    
    router.get(/.*Hello$/, (req, res) => {
        res.send('<h1>Route Fourth</h1>')
    })

   /*------------------------------------------------*
   
//? 1.SORU d


   router.get(/^\/Hello$/, (req, res) => {
    res.send("<h1>Route Fourth</h1>");
    });
   
   /*------------------------------------------------*
   //? 2. SORU


const students = [{
    id: 1,
    name: "Alex",
},
{
id: 2,
    name: "Steve",
}];

router.get('/students', (req, res) => {
    res.json(students);
    //res.send(students);
})

router.get('/students/:id', (req, res) => {

    const studentId = parseInt(req.params.id);
    const student = students.find(student => student.id === studentId);
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ error: "Student not found" });
    }
});

router.get("/", (req, res) => {
    res.send("Welcome to the student API!");
});


   /*------------------------------------------------*

   //? 3. SORU

   app.use((req, res, next) => {
    console.log("Middleware function is triggered!");
    next();
});


    app.get("/", (req, res) => {
    res.send("Hello!");
});


   /*------------------------------------------------*

//? 4. SORU
app.use((req, res, next) => {
  throw new Error("Something went wrong!");
});
// Özel hata orta yazılımı
const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    error: {
      message: err.message,
    },
  });
};
app.use(errorHandler);

/*------------------------------------------------*/

/*------------------------------------------------*/
/*------------------------------------------------*/
/*------------------------------------------------*/
/*------------------------------------------------*/
/*------------------------------------------------*/
app.listen(PORT, () => {
  console.log("Runnig port: http://127.0.0.1:" + PORT);
});
