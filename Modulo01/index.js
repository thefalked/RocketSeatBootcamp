const express = require("express");

const server = express();

// localhost:3000/teste
// Query params = ?teste=1
// Route params = /user/1
// Request body = { "name": "Giuliano", "email": "giuliano@email.com" }

const users = ["Diego", "Cláudio", "Victor"];

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);
