const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const categoriesRouter = require('../categories/categories-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
  });

server.use('/api/auth', authRouter);
server.use('/api/categories', authenticate, categoriesRouter);

server.get("/", (req, res, next) => {
    res.json({
        message: "Welcome to the Pintereach API!",
    })
})

server.use((err, req, res, next) =>{
    console.log(err)
    res.status(500).json({
        message: "Something went wrong. Can't tell you what though."
    })
})

module.exports = server
