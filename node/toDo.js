const http = require("node:http");
const PORT = 3000;

const todos = [];
const server = http.createServer(function (req, res) {
  console.log(`URL:: ${req.method}  :: ${req.url}`);
  const parts = req.url.split("/");
  console.log(parts);

  if (req.method === "GET") {
    if (parts[0] === "") {
      if (parts[1] === "") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Jenpalekso nge todo app na`);
      }
      if (parts[1] === "todos") {
        if (parts[2]) {
          const id = Number(parts[2]);
          const todo = todos.find((item) => item.id === id);
          if (todo) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ todos }));
          } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(`Todo with id ${id} not found`);
          }
          return;
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ todos }));
      }
    }
  }
  if (req.method === "POST") {
    if (parts[1] === "todos") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const todo = JSON.parse(body);
        todo.id = Date.now();
        todos.push(todo);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "created", todo }));
      });
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
