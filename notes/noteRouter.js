const express = require('express');
const Notes = require('./noteModel.js');
const router = express.Router();

// get all notes
router.get('/',(req,res) => {
    Notes.find()
    .then(notes => {
        res.json(notes)
    })
    .catch(err => {
        res.status(500).json({message:'Could not retrieve notes'})
    })
})

// create a new note object
router.post('/',(req,res) => {
    const noteData = req.body;
    Notes.add(noteData)
    .then(note => {
        res.status(201).json(note)
    })
    .catch(err => {
        res.status(500).json({message:'Could not create note object'})
    })
})

module.exports = router;