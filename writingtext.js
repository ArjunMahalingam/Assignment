const fs = require('fs');
const data = 'Hi I want to become an Full Stack Web Developer!';
const filePath = 'node.txt';
fs.writeFile(filePath, data, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data has been written to the file Successfully!');
    }
});
