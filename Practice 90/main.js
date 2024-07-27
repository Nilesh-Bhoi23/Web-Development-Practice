const express = require("express");
const app = express();
const port = 3000;
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"));

// ...

app.use('/blog', blog)

// Middleware 1 - logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.nilesh = "i am nilesh bhai";
  fs.appendFileSync("logs.text", `${Date.now()} is a ${req.method}`)
  console.log(`${Date.now()} is a ${req.method}\n`);
//   res.send("Hacked by middleware 1") 
// Cannot set headers after they are sent to the client
  next();  
  // when we not call NEXT() than response not go next middleware
});

// Middleware 2
app.use((req, res, next) => {
    console.log("m2");
    req.nilesh = "i am kamlesh bhai";
    next();
  });
  

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello about!" + req.nilesh);
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
