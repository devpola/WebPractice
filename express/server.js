const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();
const fs = require('fs');

const database = {
    users: [
        {
            
        }
    ]
};

//middleware
app.use(express.static(__dirname + '/public'));

app.get('/signin', (req, res) => {
    fs.readFile('public/signin.html', (error, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

app.post('/login', upload.none(), (req, res) => {
    console.log("login!!");
    var userName = req.body.name;
    var password = req.body.password;
    if(userName ===  database.users[0].name && password === database.users[0].password){
        console.log("success");
        //if success on signin, render dashboard
        fs.readFile('public/dashboard.html', (error, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });     
    }
    else{
        console.log("false!");
    }
});

app.listen(3000, () => {
    console.log("app is running on port 3000");
});