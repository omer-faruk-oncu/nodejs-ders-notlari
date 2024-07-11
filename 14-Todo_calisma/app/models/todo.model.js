"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

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

  module.exports = Todo