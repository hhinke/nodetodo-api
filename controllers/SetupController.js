var Todos = require("../models/TodoModel");

module.exports = (app) => {
  app.get("/api/setupTodos", (req, res) => {
    var starterTodos = [
      {
        username: "nodetodo",
        todo: "Buy Milk",
        isDone: false,
        hasAttachments: false,
      },
      {
        username: "nodetodo",
        todo: "Feed Dog",
        isDone: false,
        hasAttachments: false,
      },
      {
        username: "nodetodo",
        todo: "Learn Node",
        isDone: false,
        hasAttachments: false,
      },
    ];

    Todos.create(starterTodos, (err, results) => {
      res.send(results);
    });
  });
};
