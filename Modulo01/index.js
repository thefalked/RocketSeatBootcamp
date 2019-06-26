const express = require("express");

const server = express();

server.use(express.json());

// localhost:3000/teste
// Query params = ?teste=1
// Route params = /user/1
// Request body = { "name": "Giuliano", "email": "giuliano@email.com" }

// CRUD, Create, Read, Update, Delte

const users = ["Diego", "Robson", "Victor"];

server.use((req, res, next) => {
  console.time("Request");
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  // return next();
  //without the return, `next` get the next route, and then it ends the function
  next();

  //the lines down here execute after the `next` get completed
  console.timeEnd("Request");
});

function checkUserExists(req, res, next) {
  if (!req.body.user) {
    return res.status(400).json({ error: "User name is required" });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = user[req.params.index];

  if (!user) {
    return res.status(400).json({ error: "User does not exists" });
  }

  req.user = user;

  return next();
}

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", checkUserInArray, (req, res) => {
  // const { index } = req.params;

  // return res.json(users[index]);

  //req.user from local Middleware (checkUserInArray)
  return res.json(req.user);
});

server.post("/users", checkUserExists, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put("/users/:index", checkUserExists, checkUserInArray, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

server.delete("/users/:index", checkUserInArray, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  // return res.json(users);
  return res.send();
});

server.listen(3000);
