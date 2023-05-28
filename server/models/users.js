const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
router.use(bodyParser.json())
const fs = require("fs");
const data = require("../data/users.json");

var userExists = false;

router.post("/", (req,res) => {
    console.log(req.body)
    addUser(req.body);

    res.json({"message": "Form submitted"})
})

router.get("/", (req, res) => {
    res.send(data);
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
    jsonReader("./data/users.json", (err, data) => {
        if(err) {
            console.log(err);
        } else {
            data.forEach(element => {
                if(userInfo.username === element.username) {
                    userExists = true;
                }
            });
            console.log("userexists?", userExists)
            if(userExists) {
                userExists = false;
                console.log("Username is taken")
            } else {
                data.push(userInfo)
                fs.writeFile("./data/users.json", JSON.stringify(data, null, 2), err => {
                    if(err) {
                        console.log(err);
                    }
                });
 1           }
        }
    });
}


module.exports = router;

