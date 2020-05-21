const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(morgan())
server.use(cors())

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
