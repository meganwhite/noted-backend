const express = require('express');
const Resources = require('./resourceModel.js');
const router = express.Router();

// get all resources
router.get("/",async(req,res) => {
    try {
        const result = await Resources.getResources();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({message: 'Could not get resources'})
    }
})

// create a resource -- need to send user id in post request in front end
router.post("/", async(req,res) => {
    const {body} = req;
    try {
        const response = await Resources.addResource(body);
        if(response) {
            res.status(201).json({message:"Successfully created resource"})
        }
        else {
            res.status(400).json({message:'Could not create resource'})
        }
    } catch(error) {
        res.status(500).json(error)
    }

})

// get all resources for a user
router.get("/users/:userId",async(req,res) => {
    const user_id = req.params.userId;
    try {
        const result = await Resources.getResourcesByUser(user_id);
        res.status(200).json(result)
        console.log(user_id)
    } catch (err) {
        res.status(500).json({message:'Could not get resources for user'})
    }
})

// edit a resource

// delete a resource
router.delete("/:id",async(req,res) => {
    const id = req.params;
    try {
        const result = await Resources.deleteResource(id).deleteAllBullets(id);
        res.status(200).json(result)
        console.log(id)
    }
    catch (err) {
        res.status(500).json({message:'Could not delete resource'})
    }
})


module.exports = router

