const express = require("express");

const server = express();

server.use(express.json());

// localhost:3000/teste
// Query params = ?teste=1
// Route params = /user/1
// Request body = { "name": "Giuliano", "email": "giuliano@email.com" }

// CRUD, Create, Read, Update, Delte

const users = ["Diego", "Robson", "Victor"];

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.post("/users", (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  // return res.json(users);
  return res.send();
});

server.listen(3000);
