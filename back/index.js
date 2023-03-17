const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(`mongodb+srv://andy:133703@cluster0.uhdel5h.mongodb.net/?retryWrites=true&w=majority`)
        app.listen(PORT, () => {
            console.log("Сервер начал свою работу. порт: localhost:", PORT)
        })
    }catch (e){
        console.log("ошибка стоп 00000 \n", e)
    }
}
start()