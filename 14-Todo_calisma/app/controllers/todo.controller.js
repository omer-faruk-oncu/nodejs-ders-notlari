"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const Todo = require('../models/todo.model')

module.exports = {

    list: async (req, res) => {
        // const data = await Todo.findAll()
        const data = await Todo.findAndCountAll();
      
        res.status(200).send({
          error: false,
          result: data,
        });
      },

    create: async (req, res) => {
        const data = await Todo.create(req.body);
        // console.log(data)
      
        res.status(201).send({
          error: false,
          result: data.dataValues,
        });
      },

      read: async (req, res) => {
        //const data = await Todo.findOne({whwere: {id:req.params.id}})
        const data = await Todo.findByPk(req.params.id);
      
        res.status(200).send({
          error: false,
          result: data,
        });
      },

      update:async (req, res) => {
        const data = await Todo.update(req.body, { where: { id: req.params.id } });
        //console.log(data)
      
        res.status(202).send({
          error: false,
          result: data,
          message: data[0] >= 1 ? "Updated" : "not updated",
          new: await Todo.findByPk(req.params.id),
        });
      },

      delete: async (req, res) => {
        const data = await Todo.destroy({ where: { id: req.params.id } });
        //console.log(data)
      
        if (data >= 1) {
          res.sendStatus(204);
        } else {
          res.errorStatusCode = 404
          throw new Error ('nor deleted, maybe already deleted')
        }
      }






}