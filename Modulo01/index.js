const express = require("express");

const server = express();

// localhost:3000/teste
// Query params = ?teste=1
// Route params = /user/1
// Request body = { "name": "Giuliano", "email": "giuliano@email.com" }

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  return res.json({ message: `Buscando usuário ${id}` });
});

server.listen(3000);
