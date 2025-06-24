const fs = require("node:fs");
const utils = require("./utils");

// fs.readFile("jamyang.txt", "utf-8", (err,data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });

// try {
//     const data = fs.readFileSync("jamyang.txt", "utf-8");
//     console.log(data);
// }catch (error) {
//     console.log(error);
// }

// fs.writeFile("jamyang.txt", "Hello i am Jamyang", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         // written successfully
//     }
// })

// try {
//     fs.writeFileSync("tashi.txt", "Hello Tashi is 24 years old");
// } catch (err){
//     console.error(err);
// }

// fs.appendFile("jamyang.txt", "\n I am 24 years old", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         // written successfully
//     }
// })

// try {
//     fs.appendFileSync("tashi.txt", "\n I am from Trongsa");
// } catch (err){
//     console.error(err);
// }

// fs.writeFile("./yuden/tashii.txt", " I am tashii", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         // written successfully
//     }
// });

// fs.writeFile("../athang.txt", " I am from athang", (err) => {
//     if (err) {
//         console.error(err);
//     } else {
//         // written successfully
//     }
// });

// const content = "\n She went to Thimphu for it";
// const fileName = "jamyang.txt";

// utils.appendContentWithDate(fileName, "utf-8", content, (type,err) => {
//     console.log(type);
//     console.log(err);
// });

// fs.unlink("tashi.txt", (err) =>{
//     if (err){
//         console.log(err);
//     }
// });

// try{
//     fs.unlinkSync("server.js");
// } catch (err) {
//     console.log(err);
// }

// fs.mkdir("path", (err) =>{
//     if (err){
//         console.log(err);
//     }
// })

// try{
//     fs.mkdirSync("path1");
// }catch (err) {
//     console.log(err);
// }


// fs.mkdir("path/to/my/file", {recursive: true}, (err) =>{
//     if (err){
//         console.log(err);
//     }
// })

// fs.rm("path", {recursive: true}, (err) =>{
//     if (err){
//         console.log(err);
//     }
// })

// try{
//     fs.rmdirSync("path1");
// } catch (error) {
//     console.log(error)
// }


