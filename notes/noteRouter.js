const express = require('express');
const Notes = require('./noteModel.js');
const router = express.Router();

// get all notes
router.get("/",async(req,res) => {
    try {
        const result = await Notes.getNotes();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({message: 'Could not get notes'})
    }
})

// create a note -- need to send resource id in post request in front end
router.post("/", async(req,res) => {
    const {body} = req;
    try {
        const response = await Notes.addNote(body);
        if(response) {
            res.status(201).json({message:"Successfully created note"})
        }
        else {
            res.status(400).json({message:'Could not create note'})
        }
    } catch(error) {
        res.status(500).json(error)
    }

})

// get all notes for a resource
router.get("/:resourceId",async(req,res) => {
    const resource_id = req.params.resourceId;
    try {
        const result = await Notes.getNotesByResource(resource_id);
        res.status(200).json(result)
        console.log(resource_id)
    } catch (err) {
        res.status(500).json({message:'Could not get notes for resource'})
    }
})

module.exports = router;

