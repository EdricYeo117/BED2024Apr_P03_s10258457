// Getting information from path
const path = require('path'); // Corrected module import
const notes = '/users/edric/notes.txt';
path.dirname(notes); // Provides '/users/edric', directory name
path.basename(notes); // Provides 'notes.txt', base name
path.extname(notes); // Provides '.txt', extension name
