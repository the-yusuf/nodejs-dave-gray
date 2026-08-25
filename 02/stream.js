const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });

const ws = fs.createWriteStream("./files/new-lorem.txt");

// 1)
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

// 2)
rs.pipe(ws);
