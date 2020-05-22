const express = require("express")
//const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")
require("dotenv").config

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require("../users/users-router")
const categoriesRouter = require('../categories/categories-router.js');

const server = express();

server.use(helmet());
server.use(cors());
//server.use(morgan())
server.use(express.json());

server.use('/api/auth', authRouter);
server.use("/api/users", usersRouter)
server.use('/api/categories', authenticate, categoriesRouter);

server.get("/", (req, res, next) => {
    res.status(200).json({
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
