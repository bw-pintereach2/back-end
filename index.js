//require('dotenv').config();
const server = require('./api/server.js');

const port = process.env.PORT || 3000

//if (!module.parent) {
    server.listen(port, () => {
        console.log(`Running at http://localhost:${port}`)
    })
//}

module.exports = server