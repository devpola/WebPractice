const fs = require('fs');

fs.readFile('hello.txt', (err, data) => {
    if (err) {
        console.log('errrrorrrrr');
    }
    console.log(data.toString());
});