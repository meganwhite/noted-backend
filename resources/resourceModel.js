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


module.exports = {
    getResources,
    addResource,
    getResourcesByUser
}