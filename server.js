console.log("hello cooper");

const { log } = require("console");
const os = require("os");
const path = require("path");

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.parse(__filename));
