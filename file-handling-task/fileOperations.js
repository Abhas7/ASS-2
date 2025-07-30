const fs = require('fs');


function readFileData() {
    const data = fs.readFileSync('data.txt', 'utf8');
    console.log(data);
}

function appendFileData() {
    fs.appendFileSync('data.txt', '\nThis is Appended data');
}

module.exports = { readFileData, appendFileData };
