const db = require("../data/db-config.js")

const getResources = userId => {
    return db("resources")
}

const addResource = resource => {
    return db("resources").insert(resource)
}

module.exports = {
    getResources,
    addResource,
}