const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const userRoute = require("./models/users")

app.use("/api/login", userRoute)
const books = require("./data/books.json");


app.get("/api", (req, res) => {
    res.json(books)
})



app.listen(5000, () => { console.log("server started on port 5000") })