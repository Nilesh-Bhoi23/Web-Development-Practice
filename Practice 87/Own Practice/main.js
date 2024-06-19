const fs = require("fs")
// const fs = require("fs/promises")

console.log(fs)
console.log("Starting")
// fs.writeFileSync("Nilesh.txt" , "Nilesh is a good boy")
fs.writeFile("Nilesh2.txt" , "Nilesh is good boy 2" ,()=> {
    console.log("Done")
    fs.readFile("Nilesh2.txt" , (error, data)=>{
        console.log(error , data.toString());
    })
})
fs.appendFile("Nilesh.txt", "_also smart" , (e,d)=> {
    console.log(d);
})
console.log("Endging")