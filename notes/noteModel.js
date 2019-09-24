const db = require('../data/db-config.js');

function find() {
    return db('notes')
}

function add(note) {
    return db('notes').insert(note)
}

module.exports = {
    find,
    add
}