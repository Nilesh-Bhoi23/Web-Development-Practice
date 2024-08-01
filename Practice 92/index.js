
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search"
    let arr = ["India", "America", "Europe"]
  res.render("index", {siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTital = "Adidas why and when?"
    let blogContent = "its a very good brand"
  res.render("blogpost", {blogTital: blogTital, blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})