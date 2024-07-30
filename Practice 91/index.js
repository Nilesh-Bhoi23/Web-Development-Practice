// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg
// 7. harry.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "D:\\All Files dev CWH\\Sigma-Web-Dev-Course-main\\Video 91"

let files = await fs.readdir(basepath);
console.log(files);

let extentions = [];
for (const item of files) {
    console.log("Running for  ", item)
  let ext = item.split(".")[item.split(".").length - 1];

if(ext != "js" && ext != "json" && item.split(".").length > 1){ 

  if (fsn.existsSync(path.join(basepath, ext))) {
    // move this this directory if its not a js or json file
    fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
  } 
  else {
    fs.mkdir(ext);
    fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
  }
}

}