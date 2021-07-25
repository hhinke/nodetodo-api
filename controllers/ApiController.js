var express = require("express");
var Todos = require("../models/TodoModel");

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/todos/:uname", (req, res) => {
    Todos.find({ username: req.params.uname }, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

  app.get("/api/todo/:id", (req, res) => {
    Todos.findById({ _id: req.params.id }, (err, results) => {
      if (err) throw err;
      res.send(results);
    });
  });

  app.post("/api/todo", (req, res) => {
    if (req.body.id) {
      Todos.findByIdAndUpdate(
        req.body.id,
        {
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        (err, results) => {
          if (err) throw err;
          res.send("Success");
        }
      );
    } else {
      var newTodo = Todos({
        username: "nodetodo",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });
      newTodo.save((err, results) => {
        res.send("Success");
      });
    }
  });

  app.delete("/api/todo", (req, res) => {
    Todos.findByIdAndDelete(req.body.id, (err, results) => {
      if (err) throw err;
      res.send("Success");
    });
  });
};
