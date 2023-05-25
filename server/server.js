const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const books = require("./books.json")

app.get("/api", (req, res) => {
    res.json(books)
})

app.post("/api/login", (req,res) => {
    console.log(req.body)
    let {userId, password} = req.body
    if(userId == "admin" && password == "root"){
        console.log("valid user")
    } else {
        console.log("you are not a valid user")
    }

    res.json({"message": "Form submitted"})
})

app.listen(5000, () => { console.log("server started on port 5000") })