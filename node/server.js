const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log(req.query);
    //console.log(req.body);
    //console.log(req.header);
    res.send('getting root');
});

app.get('/:id', (req, res) => {
    console.log(req.params);
    res.send('getting id');
});


app.listen(3000);








// const http = require('http');

// const server = http.createServer((request, response) => {
//     //console.log('headers',request.headers);
//     console.log('method',request.method);
//     console.log('url',request.url);
//     const user = {
//         name: 'John',
//         hobby: 'Skating'
//     }
//     response.setHeader('Content-Type', 'application/json');
//     response.end(JSON.stringify(user));
// });

// server.listen(3000);
