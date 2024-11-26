const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "big_file.txt"), {
  encoding: "utf-8",
});

const ws = fs.createWriteStream(
  path.join(__dirname, "files", "new_big_file.txt")
);

// rs.on("data", (datachunk) => {
//   ws.write(datachunk);
// });

rs.pipe(ws);
