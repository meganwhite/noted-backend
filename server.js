const express = require("express")
const server = express();
const NoteRouter = require('./notes/noteRouter');

server.use(express.json());
server.use('/api/notes',NoteRouter);

server.get("/",(req,res) => {
    res.status(200).json({message:"API is up"})
})

module.exports = server;