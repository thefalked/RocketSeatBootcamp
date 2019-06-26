const express = require("express");

const server = express();

//make express use json has I/O
server.use(express.json());

const projects = [];
let requests = 0;

server.use((req, res, next) => {
  console.log(++requests);

  return next();
});

function hasId(req, res, next) {
  const teste = projects.find(project => project.id == req.params.id);

  if (!teste) {
    return res.status(400).json({ error: `Project does not exist` });
  }

  return next();
}

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  projects.push(req.body);

  res.status(200).json(req.body);
});

server.post("/projects/:id/tasks", hasId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id].tasks.push(title);
  res.status(200).json(req.body);
});

server.put("/projects/:id", hasId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects.forEach(project => {
    project.id == id ? (project.title = title) : project.title;
  });

  res.status(200).json(projects.find(project => project.id == req.params.id));
});

server.delete("/projects/:id", hasId, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(project => project.id == id);

  projects.splice(index, 1);

  res.send();
});

server.listen(3000);
