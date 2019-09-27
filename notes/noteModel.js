const db = require('../data/db-config.js');

function getNotes() {
    return db('notes')
}

function addNote(note) {
    return db('notes').insert(note)
}

const getNotesByResource = (resource_id) => {
    return db("notes")
        .where("resource_id",resource_id)

}

module.exports = {
    getNotes,
    addNote,
    getNotesByResource
}

