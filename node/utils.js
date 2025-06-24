// function formatPerson(person){
//     return `Hello ${person.name} you are ${person.age} years old and enjoys ${person.hobbies}`
// }

// module.exports = {formatPerson };

// const  bottles = {abc: ["bisleri", "Kurjay Drupchu"]};
// module.exports = bottles;

const fs = require("node:fs");
const appendContentWithDate = (fileName, encoding, newContent, err) => {
    fs.readFile(fileName, encoding, (error, previousContent) => {
     if (error) {
      err("read", error);
      return;
     }  
     fs.writeFile(fileName, `${previousContent}${newContent}`, (writeError) =>{
        if (writeError){
            errorCallback("write", error);
        }
     });
     });
};
module.exports = { appendContentWithDate};