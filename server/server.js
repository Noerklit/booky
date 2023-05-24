const express = require('express')
const app = express()

const books = require("./books.json")

app.get("/api", (req, res) => {
    res.json(books)
})

app.listen(5000, () => { console.log("server started on port 5000") })