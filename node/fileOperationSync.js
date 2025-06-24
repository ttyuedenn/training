const fs = require("node:fs");

// try {
//   fs.mkdirSync("StudentFolder");
//   fs.writeFileSync("./StudentFolder/notes.txt", "This is my first note");
//   fs.appendFileSync("notes.txt", "\n Adding another line to my notes.");

//   const data = fs.readFileSync("notes.txt", "utf-8");
//   console.log(data);
//   fs.unlinkSync("notes.txt");
//   fs.rmdirSync("StudentFolder");
// } catch (error) {
//   console.log(error);
// }