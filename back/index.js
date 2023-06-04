const express = require('express')
var cors = require('cors')
const userRouter = require('./routes/user.router')
const companyRouter = require('./routes/company.routes')
const vacancyRouter = require('./routes/vacancy.router')
var fs = require('fs');
var util = require('util');
// const client = require('./el_sql');
let now = new Date();

var log_file = fs.createWriteStream(__dirname + `/debug_${now.getFullYear()}.${now.getMonth()}.${now.getDate()}(${now.getHours()}.${now.getMinutes()}.${now.getSeconds()}.${now.getMilliseconds()}).log`, {flags : 'w'});
var log_stdout = process.stdout;
const PORT = process.env.PORT || 8080



const app = express()
app.use(cors())
// app.get('/' ,(req, res) => {
//     res.send("pablo")
// })
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', companyRouter)
app.use('/api', vacancyRouter)



// app.get('/api/company', async (req, res) => {
//   try {
//       const results = await client.query('SELECT * FROM company');
//       res.json(results);
//   } catch (err) {
//       console.log('ЧЕТО ПОШЛО НЕ ТАК \n код ошибки: ',err);
//   }
// })
// app.get('/api/company', async (req, res) => {
//   try {
//       const results = await client.query('SELECT * FROM company');
//       res.json(results);
//   } catch (err) {
//       console.log('ЧЕТО ПОШЛО НЕ ТАК \n код ошибки: ',err);
//   }
// })


app.get('/sample_text', async (req, res) => {
  try {
      const results = await client.query('SELECT * FROM j_position');
      res.json(results);
  } catch (err) {
      console.log(err);
  }
})


app.listen(PORT, () => console.log("░░▄███████▀▀▀▀▀▀███████▄\n░▐████▀▒ЗАПУСКАЕМ▒▀██████▄ \n░███▀▒▒▒▒▒ДЯДЮ▒▒▒▒▒▒▀█████\n░▐██▒▒▒▒▒▒Сервака▒▒▒▒▒████▌ \n░▐█▌▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒████▌ \n░░█▒▄▀▀▀▀▀▄▒▒▄▀▀▀▀▀▄▒▐███▌ \n░░░▐░░░▄▄░░▌▐░░░▄▄░░▌▐███▌\n░▄▀▌░░░▀▀░░▌▐░░░▀▀░░▌▒▀▒█▌ \n░▌▒▀▄░░░░▄▀▒▒▀▄░░░▄▀▒▒▄▀▒▌ \n░▀▄▐▒▀▀▀▀▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒█ \n░░░▀▌▒▄██▄▄▄▄████▄▒▒▒▒█▀ \n░░░░▄██████████████▒▒▐▌\n░░░▀███▀▀████▀█████▀▒▌ \n░░░░░▌▒▒▒▄▒▒▒▄▒▒▒▒▒▒▐ \n░░░░░▌▒▒▒▒▀▀▀▒▒▒▒▒▒▒▐\n\nВаш сервер работает на порту", PORT))


console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};


