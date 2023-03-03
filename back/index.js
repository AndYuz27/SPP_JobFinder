const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()


const start = () => {
    try{
        app.listen(PORT, () => {
            console.log("Сервер начал свою работу")
        })
    }catch (e){
        console.log("ошибка стоп 00000 \n", e)
    }
}