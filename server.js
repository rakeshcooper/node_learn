// console.log("hello cooper");

// const os = require("os");
const path = require("path");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);
// console.log(path.dirname(__filename));
// console.log(path.parse(__filename));

// const {add, sub, mul, div} = require("./math");
// console.log(add(6, 3));
// console.log(sub(6, 3));
// console.log(mul(6, 3));
// console.log(div(6, 3));

// import { readFile } from "node:fs";

const { log } = require("node:console");
const fs = require("node:fs");

fs.readFile(path.join(__dirname, "files", "file.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  path.join(__dirname, "files", "new.txt"),
  "cooper is good boy",
  (err) => {
    if (err) throw err;
    console.log("write complete");
    fs.appendFile(
      path.join(__dirname, "files", "new.txt"),
      "\n\n cooper is ate is lunch, this appended line",
      (err) => {
        if (err) throw err;
        console.log("append complete");
        fs.readFile(
          path.join(__dirname, "files", "new.txt"),
          "utf8",
          (err, data) => {
            if (err) throw err;
            console.log(data);
            console.log("new filed readed");
          }
        );
      }
    );
  }
);

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception thrown ${err}`);
  process.exit(1);
});

console.log("hi cooper");
