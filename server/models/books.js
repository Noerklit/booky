const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
router.use(bodyParser.json())
const fs = require("fs");
const books = require("../data/books.json");


router.get("/", (req, res) => {
    res.send(books)
})

router.post("/", (req,res) => {
    console.log(req.body)
    addBook(req.body);

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

function addBook(bookInfo) {
    jsonReader("./data/books.json", (err, data) => {
        if(err) {
            console.log(err);
        } else {
            bookInfo.bookID = addBookID();
            data.push(bookInfo)
            fs.writeFile("./data/books.json", JSON.stringify(data, null, 2), err => {
                if(err) {
                    console.log(err);
                }
            });
        }
    });
}

function addBookID() {
    return "book" + books.length;
}

module.exports = router;