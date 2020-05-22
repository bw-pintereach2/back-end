const Users = require("../auth/auth-router")
const authenticate = require("../auth/authenticate-middleware")
const db = require("../database/dbConfig")

const router = require("express").Router()

router.get("/", authenticate(), async (req, res, next) =>{
    try {
        res.json(await Users.find())
    } catch(err) {
        next(err)
    }
})

router.get("/:id", authenticate(), async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)

        if (!user) {
            res.status(404).json({
                message: "User not found."
            })
        }
        res.json(user)
    } catch(err) {
        next(err)
    }
})

router.get("/:id/articles", async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)

        if (user) {
            user.articles = await db.getUserArticles(req.params.id)
            let
        }
    }
})

module.exports = router