import { createUser, getUsers } from "../model/userModel.js"

const userController = {
    async registerUser(req, res){
        const {name, email, tel, password} =  req.body

        try{
            await createUser(name, email, tel, password)
            console.log("Usuário registrado com sucesso")
        }catch(error){
            console.error("Erro ao registrar usuário", error)
            return res.status(403).send({messsage:"Erro ao registrar usuário!!"})
        }

        res.status(200).send({message:"Usuário cadastrado com sucesso"})

    },

    async getUser(req, res){
        const users = await getUsers()
        return users
    }

}

export {userController}