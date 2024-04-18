// Reading files utilising node.js
const fs = require('fs'); 
fs.readFile('/users/edric/notes.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
