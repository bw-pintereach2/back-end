const Users = require("../auth/auth-model")
const authenticate = require("../auth/authenticate-middleware")

const router = require("express").Router()

// Gets users
router.get("/", authenticate(), async (req, res, next) =>{
    try {
        res.json(await Users.find())
    } catch(err) {
        next(err)
    }
})

// Gets users by ID
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

// Unsure if we'll use these yet 

// // Gets a user's articles
// router.get("/:id/articles", async (req, res, next) => {
//     try {
//         const user = await Users.findById(req.params.id)

//         if (user) {
//             user.articles = await db.getUserArticles(req.params.id)
//             let
//         }
//     } catch(err) {
//         next(err)
//     }
// })

// // Update a user
// router.put("/:id", authenticate(), async (req, res, next) => {
//     try {
//         const updateUser = await Users.updateUser(req.params.id)

//         if(!updateUser) {
//             res.status(404).json({
//                 errorMessage: "User not found."
//             })
//         }
//         res.json(updateUser)
//     }
//     catch(err) {
//         next(err)
//     }
// })


module.exports = router