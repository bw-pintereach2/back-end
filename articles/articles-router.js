const router = require('express').Router();
const db = require('../database/dbConfig');


router.post("/", async (req, res, next) => {
    const newArticle = req.body
  
    db("articles")
    .insert(newArticle)
    .then(article => {
        res.json(article);
    })
    .catch(err => {
      console.log
      res.status(500).json({ message: "Failed to submit article" + err });
    });
  });

module.exports = router;