const db = require("../data/db-config.js")

const getResources = () => {
    return db("resources")
}

const addResource = resource => {
    return db("resources").insert(resource)
}

const getResourcesByUser = (user_id) => {
    return db("resources")
        .where("user_id",user_id)

}

function findResourceById(id) {
    return db('resources')
    .where("id",id)
    .first()
}

const deleteResource = id => {
    return db("resources")
        .where(id,"id")
        .del()
}

const deleteAllBullets = id => {
    return db("notes")
        .where(id,"resource_id")
        .del()

}


module.exports = {
    getResources,
    addResource,
    getResourcesByUser,
    deleteResource,
    deleteAllBullets
}