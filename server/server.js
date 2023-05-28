const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const userRoute = require("./models/users")
const booksRoute = require("./models/books")

app.use("/api/login", userRoute)
app.use("/api/books", booksRoute)

app.listen(5000, () => { console.log("server started on port 5000") })