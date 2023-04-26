const db = require('./db')

class CompanyController {
    async getCompanies(req, res){
        const users = await db.query(`select * from company`)
        res.json(users.rows)
    }
    async getCompany(req, res){
        const id = req.params.id
        const users = await db.query(`select * from company where id =$1`, [id])
    }
}

module.exports = new CompanyController