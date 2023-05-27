const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const fs = require("fs");
const books = require("./books.json");
var userExists = false;

app.get("/api", (req, res) => {
    res.json(books)
})

app.post("/api/login", (req,res) => {
    console.log(req.body)
    let {username, password} = req.body
    addUser(req.body);
    console.log(userExists);
    if(userExists) {
        res.status(406);
    } else {
        res.status(200);
    }
    if(username == "admin" && password == "root"){
        console.log("valid user")
    } else {
        console.log("you are not a valid user")
    }

    res.json({"message": "Form submitted"})
})

function jsonReader(filePath, cb) {
    fs.readFile(filePath, 'utf-8', (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch (err) {
            return cb && cb(err);
        }
    });
}

function addUser(userInfo) {
    jsonReader("./users.json", (err, data) => {
        if(err) {
            console.log(err);
        } else {
            data.forEach(element => {
                if(userInfo.username === element.username) {
                    userExists = true;
                }
            });
            if(userExists) {
                console.log("Username is taken")
            } else {
                data.push(userInfo)
                fs.writeFile("./users.json", JSON.stringify(data, null, 2), err => {
                    if(err) {
                        console.log(err);
                    }
                });
 1           }
            return userExists;
        }
    });
}

app.listen(5000, () => { console.log("server started on port 5000") })