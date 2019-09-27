const db = require("../data/db-config.js")
const jwt = require("jsonwebtoken");
const {jwtKey} = require("../auth/authenticate");

const findById = id => {
    return db("users")
        .where({id})
        .first()
}

const createUser = newUser => {
    return db("users")
        .insert(newUser)
        .then(([id]) => {
            return findById
        })
}

const login = filter => {
    return db("users")
        .where(filter)
        .first()
}

const getUsers = () => {
    return db("users")
}

const getUserById = (user_id) => {
    return db("users")
        .where("id",user_id)
}

const generateToken = user => {
    const payload = {
        subject: user.id,
        username: user.username
    };
    const option = {
        expiresIn: "1d"
    }
    return jwt.sign(payload,jwtKey,option)
}

module.exports = {
    findById,
    createUser,
    login,
    getUsers,
    generateToken,
    getUserById
}