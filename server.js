const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
  //   res.write("Hi cooper");
});

server.listen(PORT, (error) => {
  if (error) {
    console.log(error + "error");
  } else {
    console.log("Server is running on PORT " + PORT);
  }
});
