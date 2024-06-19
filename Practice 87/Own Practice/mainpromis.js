import fs from "fs/promises"

let a = await fs.readFile("Nilesh.txt")

let b = await fs.appendFile("Nilesh.txt", "\n\n\n\n\n\ this is amazing promise")


console.log(a.toString())