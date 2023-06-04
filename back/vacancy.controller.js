const db = require('./el_sql');

class VacancyController {
    // async createUser(req, res){
    //     const {fio, nick, pwd, exp, prtf, city, phone, email, ps_id} = req.body
    //     const newUser = await db.query(`insert into finders(full_name_fndr, nik_name, pwd, experience, portfolio, city, phone, email, position_id) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [fio, nick, pwd, exp, prtf, city, phone, email, ps_id])
    //     console.log("data is added (user)")
    //     res.json(newUser)

    // }
    async getVacancyByCompany(req, res){
        const id = req.params.id
        const users = await db.query(`SELECT * from vacancy where comp_id = $1`, [id])
        res.json(users)
    }
    async getVacancies(req, res){
        const users = await db.query(`SELECT * from vacancy `)
        res.json(users)

    }
    // async createVacancy(req, res){}
    // async getVacancies(req, res){}
    // async getVacancy(req, res){}
    // async updVacancy(req, res){}
    // async createCompany(req, res){}
    // async getCompanies(req, res){}
    // async getCompany(req, res){}
    // async updCompany(req, res){}
    // async createPosition(req, res){}
    // async getPositions(req, res){}
    // async getPosition(req, res){}
    // async updPosition(req, res){}
}

module.exports = new VacancyController