const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.write("Hi cooper");
  res.end();
});

server.listen(PORT, (error) => {
  if (error) {
    console.log(error + "error");
  } else {
    console.log("Server is running on PORT " + PORT);
  }
});
