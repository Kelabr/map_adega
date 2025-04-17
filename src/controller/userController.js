import { createUser, getUsers, login } from "../model/userModel.js"
import { app } from "../config/app.js"

const userController = {
    async registerUser(req, res){
        const {name, email, tel, password} =  req.body

        try{
            console.log("Usuário registrado com sucesso")
        }catch(error){
            console.error("Erro ao registrar usuário", error)
            return res.status(403).send({messsage:"Erro ao registrar usuário!!"})
        }

        const token = app.jwt.sign({email, name})

        res.status(200).send({message:"Usuário cadastrado com sucesso", token:token})

    },

    async getUser(req, res){
        const users = await getUsers()
        return users
    },

    async loginUser(req, res){
        const {email, password} = req.body
        const user = await login(email, password)

        if(!user){
            res.status(403).send("Erro ao tentar logar")
        }

        const token = app.jwt.sign({email, name:user.name})

        res.status(200).send({message:"Usuário logado com sucesso!!", token:token})

        
    }

}

export {userController}