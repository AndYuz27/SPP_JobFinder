const db = require('./db')

class CompanyController {
    async getCompanies(req, res){
        const users = await db.query(`select * from company`)
        console.log('GET companies info')
        res.json(users)
    }
    async getCompany(req, res){
        const id = req.params.id
        const users = await db.query(`select * from company where id =$1`, [id])
        console.log('GET companies info')
        res.json(users)
    }
}

module.exports = new CompanyController