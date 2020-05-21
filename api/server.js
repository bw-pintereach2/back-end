const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

const server = express()

server.use(helmet())
server.use(express.json())
server.use(morgan())
server.use(cors())


module.exports = server
