const db = require('./el_sql');

class CompanyController {
    async getCompanies(req, res){
        const users = await db.query(`select * from company`)
        console.log('GET companies info')
        res.json(users)
    }
    async getCompany(req, res){
        const id = req.params.id
        const users = await db.query(`select * from company where id =$1`, [id])
        console.log('GET company info')
        console.log(users.rows[0].id)
        console.log(users.rows[0].company_name)
        res.json(users)
    }
}

module.exports = new CompanyController