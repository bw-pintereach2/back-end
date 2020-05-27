//const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

async function add(user) {
    // Maybe not require password to see bookmarks?
    //user.password = await bcrypt.hash(user.password, 14)
  
    const [id] = await db("users").insert(user)
   
    return findById(id)
  }

function find() {
    return db("users")
        .select("id", "username")
}

function findById(id) {
    return db("users")
        .where({ id })
        .first("id", "username")
}

function getUserArticles(id) {
    return db("articles")
        .where({ id })
}

function updateUser(id, updates) {
    return db("users")
        .where({ id })
        .update(updates)
}

function deleteUser(id) {
    return db("users")
        .where({ id })
        .del()
}


module.exports = {
    add,
    find,
    findById,
    getUserArticles,
    updateUser,
    deleteUser,
}