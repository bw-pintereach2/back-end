const router = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../database/dbConfig");
const secrets = require("../config/secrets");
const Users = require("./users-model")


// Gets users
router.get("/", async (req, res, next) =>{
    try {
        res.json(await Users.find())
    } catch(err) {
        next(err)
    }
})

// Gets users by ID
router.get("/:id", async (req, res, next) => {  
    const id = req.params.id;
    try {
        const user = await Users.findById(id)

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

// Gets a user's articles
router.get("/:id/articles", async (req, res, next) => {  
    const id = req.params.id;
    try {
        const user = await Users.findById(id)

        if (user) {
            user.articles = await db.getUserArticles(id)
            let
        }
    } catch(err) {
        next(err)
    }
})

// Update a user
router.put("/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
        const updateUser = await Users.updateUser(id)

        if(!updateUser) {
            res.status(404).json({
                errorMessage: "User not found."
            })
        }
        res.json(updateUser)
    }
    catch(err) {
        next(err)
    }
})


module.exports = router