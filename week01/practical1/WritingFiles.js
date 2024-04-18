// Writing files utilising node.js
const fs = require('fs'); 
const content = 'Some content!';
fs.writeFile('/users/edric/notes.txt', content, err => {
    if (err) {
        console.error(err);
        return;
    }
});