const Router = require('express')
const router = new Router()
const CompanyController = require('../company.controller')

router.get('/company', CompanyController.getCompanies)
router.get('/company/:id', CompanyController.getCompany)



module.exports = router