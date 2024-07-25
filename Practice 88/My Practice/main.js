const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello About us!");
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact me!");
});

app.get("/blog", (req, res) => {
    // Logic to fatch intro to js from the db
    // for url: http://127.0.0.1:3000/blog?mode=dark&region=in
  console.log(req.param) // will output {slug: 'intro-to-js'}
  console.log(req.query) // will output { mode: 'dark', region: 'in' }

  res.send("Hello blog! intro-to-js");
});

app.get("/blog/:slug", (req, res) => {
    // Logic to fatch ${slug} from the db
  res.send(`hello ${req.params.slug}`);
});


// app.get("/blog/intro-to-js", (req, res) => {
//     // Logic to fatch intro to js from the db
//   res.send("Hello blog! intro-to-js"); 
// });

// app.get("/blog/intro-to-python", (req, res) => {
//     // Logic to fatch intro to python from the db
//   res.send("Hello blog! intro-to-python");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
