const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: "1337",
    host: "localhost",
    port: 5432,
    database: "spp_jobfinder"
})

module.exports = pool