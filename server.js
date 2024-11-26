// console.log("hello cooper");

// const os = require("os");
const path = require("path");

// const fs = require("node:fs");
const fsPromise = require("fs").promises;

async function fileops() {
  try {
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "file.txt"),
      "utf8"
    );
    console.log(data);

    await fsPromise.writeFile(
      path.join(__dirname, "files", "new.txt"),
      "cooper is good boy"
    );
    console.log("write complete");

    await fsPromise.appendFile(
      path.join(__dirname, "files", "new.txt"),
      "\n\n cooper is ate is lunch, this appended line"
    );
    console.log("append complete");
  } catch (err) {
    console.error(err);
  }
}
fileops();

// fs.readFile(path.join(__dirname, "files", "file.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.writeFile(
//   path.join(__dirname, "files", "new.txt"),
//   "cooper is good boy",
//   (err) => {
//     if (err) throw err;
//     console.log("write complete");
//     fs.appendFile(
//       path.join(__dirname, "files", "new.txt"),
//       "\n\n cooper is ate is lunch, this appended line",
//       (err) => {
//         if (err) throw err;
//         console.log("append complete");
//         fs.rename(
//           path.join(__dirname, "files", "new.txt"),
//           path.join(__dirname, "files", "update.txt"),
//           (err, data) => {
//             if (err) throw err;
//             console.log(data);
//             console.log("rename done");
//           }
//         );
//       }
//     );
//   }
// );

process.on("uncaughtException", (err) => {
  console.error(`Uncaught Exception thrown ${err}`);
  process.exit(1);
});

console.log("hi cooper");
