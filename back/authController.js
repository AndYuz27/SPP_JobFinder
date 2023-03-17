const User = require('./User')
const Role = require('./Role')
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require("./config")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "12h"})
}

class authController {
    async regitration(req, res){
     try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({message: "ошибка при регистрации", errors})
        }
        const {username, password} = req.body
        const candidate = await User.findOne({username})
        if (candidate) {
            return res.status(400).json({message: "Я уже знаю этого пользователя не надо мне двойников"})
        }
        const hashPassword = bcrypt.hashSync(password, 7)
        const userRole = await Role.findOne({value: "USER"})
        const user = new User ({username, password: hashPassword, roles: [userRole.value]})
        await user.save()
        return res.json({message:"пользователь зарегистрирован"})
     }  catch(e){
        res.status(400).json({message: 'Server is feel bad((((    (register fail)'})
        console.log("system halted")
     } 
    }
    async login(req, res){
        try{
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user){
                return res.status(400).json({message: `${username} isn't found`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword){
                return res.status(400).json({message: "password isn't correct"})
            }
            const token = generateAccessToken(user._id, user.roles)
            return res.json({token})
        }  catch(e){
            res.status(400).json({message: 'Server is feel bad(((( (login fail)'})
            console.log("system halted", e)
        } 
       }
       async getUsers(req, res){
        try{
            const users = await Users.find()
            res.json("sever work")
        }  catch(e){
            res.status(400).json({message: 'Server is feel bad(((( (get fail)'})
            console.log("system halted")
        } 
       }
}
module.exports = new authController()