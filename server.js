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

const math = require("./math");
console.log(math.add(6, 3));
console.log(math.sub(6, 3));
console.log(math.mul(6, 3));
console.log(math.div(6, 3));
