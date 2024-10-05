const fs  = require('fs');

// fs.writeFile("massage.txt", "Hii I am Nilesh", (err)=>{
//     if (err) throw err;
//     console.log("The File is Saved");
// });

fs.readFile("massage.txt",'utf8', (err, data)=> {
    if  (err) throw err;
    console.log(data);
});