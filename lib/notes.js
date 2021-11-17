const fs = require('fs');
const path = require('path');


function createNewNote(body, array) {
    const note = body;
    // note.id = array.lenght.toString();
    array.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify(array, null, 2)
    );
}

function deleteNote(id, array) {
    const result = array.findIndex(note => note.id === id);
    let removed = array.splice(result, 1);
    fs.writeFileSync(
        path.join(__dirname, '../data/notes.json'),
        JSON.stringify(array, null, 2)
    );
}

module.exports = { createNewNote, deleteNote };