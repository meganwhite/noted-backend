const express = require("express")
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const NoteRouter = require('./notes/noteRouter.js');
const UserRouter = require('./users/userRouter.js')
const ResourceRouter = require('./resources/resourceRouter.js')

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/notes',NoteRouter);
server.use('/api/users',UserRouter);
server.use('/api/resources', ResourceRouter);

server.get("/",(req,res) => {
    res.status(200).json({message:"API is up"})
})

module.exports = server;