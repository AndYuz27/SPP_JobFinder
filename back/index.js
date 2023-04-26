const express = require('express')
const userRouter = require('./routes/user.router')
const companyRouter = require('./routes/company.routes')
const PORT = process.env.PORT || 8080


const app = express()

// app.get('/' ,(req, res) => {
//     res.send("pablo")
// })
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', companyRouter)

app.listen(PORT, () => console.log("░░▄███████▀▀▀▀▀▀███████▄\n░▐████▀▒ЗАПУСКАЕМ▒▀██████▄ \n░███▀▒▒▒▒▒ДЯДЮ▒▒▒▒▒▒▀█████\n░▐██▒▒▒▒▒▒Сервака▒▒▒▒▒████▌ \n░▐█▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████▌ \n░░█▒▄▀▀▀▀▀▄▒▒▄▀▀▀▀▀▄▒▐███▌ \n░░░▐░░░▄▄░░▌▐░░░▄▄░░▌▐███▌\n░▄▀▌░░░▀▀░░▌▐░░░▀▀░░▌▒▀▒█▌ \n░▌▒▀▄░░░░▄▀▒▒▀▄░░░▄▀▒▒▄▀▒▌ \n░▀▄▐▒▀▀▀▀▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒█ \n░░░▀▌▒▄██▄▄▄▄████▄▒▒▒▒█▀ \n░░░░▄██████████████▒▒▐▌\n░░░▀███▀▀████▀█████▀▒▌ \n░░░░░▌▒▒▒▄▒▒▒▄▒▒▒▒▒▒▐ \n░░░░░▌▒▒▒▒▀▀▀▒▒▒▒▒▒▒▐\n\nВаш сервер работает на порту", PORT))

