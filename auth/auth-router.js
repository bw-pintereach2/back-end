const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Users = require("./auth-model")
const authenticate = require("./authenticate-middleware")
const secrets = require("../config/secrets")

const router = require("express").Router()

router.post("/register", async (req, res, next) => {
    try {
      const { username } = req.body
      const user = await Users.findBy({ username }).first()
      console.log("register")
      if (user) {
        return res.status(409).json({
          message: "Username is already taken",
        })
      }
      console.log(user)
      const newUser = await Users.add(req.body)
      res.status(201).json(newUser)

    } catch(err) {
      next(err)
    }
  
    // try {
    //   const newUser = await add(req.body)
      
    //   res.status(201).json(newUser)
    // } catch (err) {
    //   next(err)
    // }
  })
  
  router.post("/login", async (req, res, next) => {
    let { username, password } = req.body

    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user)

          res.status(200).json({
            message: `Welcome ${user.username}! Here, have a token...`,
            token,
          })
        } else {
          res.status(401).json({
            message: "Invalid credentials"
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
    
    // try {
    //   const { username, password } = req.body;
    //   const user = await db("users")
    //     .where({ username })
    //     .first();
    //   const passwordValid = await bcrypt.compare(password, user.password);
  
    //   if (user && passwordValid) {
    //     const token = jwt.sign(
    //       {
    //         subject: user.id,
    //         username: user.username
    //       },
    //       secrets.jwt,
    //       {
    //         expiresIn: "1d"
    //       }
    //     );
  
    //     res.status(200).json({
    //       message: `Welcome ${user.username}!`,
    //       user_id: user.id,
    //       token: token
    //     });
    //   } else {
    //     res.status(401).json({
    //       message: "Invalid Credentials"
    //     });
    //   }
    // } catch (err) {
    //   next(err);
    // }
  });

  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
    }

    const options = {
      expiresIn: "1d",
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
  }
  

  // moved to auth-model
  // async function add(user) {
    
  //     user.password = await bcrypt.hash(user.password, 10)
    
  //     const [id] = await db("users")
  //       .insert(user)
     
  //     return findById(id)
  //   }
    
  //   function findById(id) {
  //     return db("users")
  //       .where({ id })
  //       .first("id", "username")
  //   }
  
  
  module.exports = router;
