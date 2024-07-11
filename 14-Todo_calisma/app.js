"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json());

// AsyncErrors to errorHandler:
require("express-async-errors");
/* ------------------------------------------------------- */
// SEQUELIZE:
// $ npm i sequelize sqlite3

const { Sequelize, DataTypes } = require("sequelize");

// Connection Object:

const sequelize = new Sequelize(
  "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
);

// Sequelize Model:

const Todo = sequelize.define("todos", {
  title: {
    type: DataTypes.STRING(256), // varchar(256)
    allowNull: false,
  },

  description: DataTypes.TEXT, // ShortHand

  priority: {
    // 1: High, 0: Normal, -1: Low
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

// Connect to DB:
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch(() => console.log("* DB Not Connected *"));

/* ------------------------------------------------------- */
// ROUTES:

const router = express.Router();

// LIST TODOS:
router.get("/", async (req, res) => {
  // const data = await Todo.findAll()
  const data = await Todo.findAndCountAll();

  res.status(200).send({
    error: false,
    result: data,
  });
});

// CRUD: Create Read Update Delete

// CREATE TODO:
router.post("/", async (req, res) => {
  const data = await Todo.create(req.body);
  // console.log(data)

  res.status(201).send({
    error: false,
    result: data.dataValues,
  });
});

// READ TODO:

router.get('/:id', async(req,res)=>{

    //const data = await Todo.findOne({whwere: {id:req.params.id}})
    const data = await Todo.findByPk(req.params.id)

    res.status(200).send({
        error: false,
        result: data
    })

})


app.use(router);

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
