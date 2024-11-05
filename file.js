const fs = require("fs");

//Synchronization
fs.writeFileSync("./test.txt", "Hey There");
//const result = fs.readFileSync("./contacts.txt", "utf-8");
//console.log(result);

fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());

fs.appendFileSync("./test.txt", 'Hey There\n');

fs.appendFileSync("./test.txt", '${Date.now()} Hey There \n');

fs.cpSync('./test.txt', './copy.txt');

//fs.unlinkSync("./copy.txt"); -->deletes the copied file

fs.statSync("./test.txt");

//console.log(fs.statSync("./test.txt"));

//console.log(fs.statSync("./test.txt").isFile());

//fs.mkdirSync("my-docs");

fs.mkdirSync("my-docss/a/b", {recursive:true});

//Asynchronous File
//fs.writeFile("./test.txt", "Hello There Async", (err)=>{});

/*fs.readFile("./contacts.txt", "utf-8",
    (err, result)=>{
        if(err){
            console.log("Error", err);
        }else{
            console.log(result);
        }
    }
);*/