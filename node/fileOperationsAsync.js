const fs = require("node:fs/promises");
const path = require("node:path")

async function fileOperations(){
    try {
    const file = "tasks.txt";
    const folderName = "AsyncFolder";
    const filePath = path.join(folderName, file);
    await fs.mkdir(folderName);
    await fs.writeFile(filePath, "Task 1: Learn Node.js FS module.");
    await fs.appendFile(filePath, "\n Task 2: Practice more examples.");
    const data = await fs.readFile(filePath, "utf-8");
    console.log(data);
    await fs.unlink(filePath);
    await fs.rmdir(folderName);

    }catch (error){
    console.log(error);
}
}