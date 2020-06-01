const router = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../database/dbConfig");
const secrets = require("../config/secrets");
const articlesRouter = require("../articles/articles-router");


router.use("/articles", articlesRouter);

// Adds new category

router.post("/", async (req, res, next) => {
  const newCategory = req.body;

  db("categories")
    .insert(newCategory)
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      console.log;
      res.status(500).json({ message: "Failed to submit category" + err });
    });
});

// Gets all categories

router.get("/", (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, secrets.jwt);

  const user_id = decoded.subject;

  db("categories")
    .where({ user_id })
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      console.log;
      res.status(500).json({ message: "Failed to retrieve categories" + err });
    });
});

// Gets all articles for a category

router.get(`/:id`, (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, secrets.jwt);

  const user_id = decoded.subject;

  const category_id = req.params.id;
  db("articles")
    .where({ category_id, user_id })
    .then(articles => {
      res.json(articles);
    })
    .catch(err => {
      console.log;
      res.status(500).json({ message: "Failed to retrieve articles" + err });
    });
});

// Updates categories

router.put(`/:id`, (req, res) => {
  const id = req.params.id;
  db("categories")
    .where({ id })
    .update( req.body )
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      console.log;
      res.status(500).json({ message: "Failed to update category" + err });
    });
});

// Deletes categories

router.delete(`/:id`, (req, res) => {
  const id = req.params.id;
  db("categories")
    .where({ id })
    .del()
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      console.log;
      res.status(500).json({ message: "Failed to delete category" + err });
    });
});

module.exports = router;
