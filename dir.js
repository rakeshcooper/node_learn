const { log } = require("console");
const fs = require("fs");

if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("directory deleted");
  });
} else {
  console.log("already exist");
}
