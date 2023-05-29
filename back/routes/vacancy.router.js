const Router = require('express')
const router = new Router()
const VacancyController = require('../vacancy.controller')

router.get('/vacancy', VacancyController.getVacancies)
router.get('/vacancy/:id', VacancyController.getVacancyByCompany)



module.exports = router