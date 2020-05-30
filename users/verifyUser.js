const db = require("../database/dbConfig")
const Users = require("./users-model")

async function userOrAdmin(req, res, next) {
    try {
        let checkUser = await db.getById(req.decoded.subject)

        if (checkUser.id === Number(req.params.userid) || checkUser.is_admin) {
            next()
        } else {
            return res.status(401).json({
                message: "Not admin or article creator"
            })
        }
    }
    catch(err) {
        next(err)
    }
}

module.exports = userOrAdmin