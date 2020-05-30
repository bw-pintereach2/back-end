require('dotenv').config();
const server = require('./api/server.js');

server.listen(process.env.PORT, () => console.log(`\n** Running on port ${process.env.PORT} **\n`));

// require('dotenv').config();
// const server = require('./api/server.js');

// const port = process.env.PORT || 5000

// server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));