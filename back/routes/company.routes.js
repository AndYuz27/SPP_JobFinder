const Router = require('express')
var cors = require('cors')
const router = new Router()
const CompanyController = require('../company.controller')

router.get('/company', cors(), CompanyController.getCompanies)
router.get('/company/:id', CompanyController.getCompany)



module.exports = router