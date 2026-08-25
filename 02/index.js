const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

/***  2 - way like promises  ***/
const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8",
    );
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data,
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\nNice to meet you.",
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseRename.txt"),
    );

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseRename.txt"),
      "utf8",
    );
    console.log(data);
    console.log(newData);
  } catch (error) {
    console.log(error);
  }
};

fileOps();

/***  1 - way like callback hell  ***/
// fs.readFile(path.join(__dirname, "files", "starter.txt"), (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nice to meet you!",
//   (err) => {
//     if (err) throw err;
//     console.log("Write complete");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "new-reply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           },
//         );
//       },
//     );
//   },
// );

// exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error("There was an uncaught error:", err);
  process.exit(1);
});
