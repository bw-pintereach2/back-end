const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

function authenticate() {
  return async (req, res, next) => {
    try {
      const authError = {
        message: "Invalid credentials",
      }

      console.log(req.headers)
      const token = req.headers.authorization
      if (!token) {
        return res.status(401).json(authError)
      }

      jwt.verify(token, secrets, (err, decodedPayload) => {
        if (err) {
          return res.status(401).json(authError)
        }

        req.token = decodedPayload

        next()
      })
    } catch(err) {
      next(err)
    }
  }
}

// module.exports = (req, res, next) => {
//     try {
//       const token = req.headers.authorization
//       const decoded = jwt.verify(token, secrets.jwt)

//       req.userId = decoded.subject
//       next()
//     } catch (err) {
//       return res.status(401).json({ you: 'shall not pass!' })
//     }
//   }

module.exports = authenticate