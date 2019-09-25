const express = require('express');
const bcrypt = require('bcryptjs')
const Users = require('./userModel.js');
const router = express.Router();

//register a user
router.post("/register",async(req,res) =>{
    const {body} = req;
    const hash = bcrypt.hashSync(body.password,12)
    body.password = hash
    try {
        const response = await Users.createUser(body);
        if(response) {
            res.status(201).json(response)
        }
        else {
            res.status(400).json({message:'Could not create user'})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// login
router.post("/login",async(req,res) => {
    const {body} = req
    try {
        const user = await Users.login({username: body.username})
        if(user) {
            const auth = bcrypt.compareSync(body.password, user.password)
            if (auth) {
                const token = Users.generateToken(user)
                res.status(200).json({
                    message:`Welcome ${user.username}!`,
                    token,
                    user
                })
            }
            else {
                res.status(401).json({message: "Invalid credentials"})
            }
        }
        else {
            res.status(400).json({message: "Could not find user"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// view list of users
router.get("/", async(req,res) => {
    try {
        const users = await Users.getUsers()
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'Could not retrieve users'})
    }
})


module.exports = router