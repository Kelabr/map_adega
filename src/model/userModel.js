import {prisma} from "../config/db.js"
import bcrypt from "bcryptjs"

async function createUser(name, email, tel, password){
    const newUser = await prisma.users.create({
        data:{
            name:name,
            email:email,
            tel:tel,
            password:bcrypt.hashSync(password, 10)
        }
    })

    return newUser
}

async function getUsers(){
    const Users = await prisma.users.findMany()

    return Users
}

async function login(email, password){
    
    const user = await prisma.users.findUnique({
        where: {
            email: email
        }
    })

    if(!user){
        console.log("Email não encontrado")
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if(!passwordMatch){
        console.log("Senha incorreta")
        return
    }

    return user


}




export {createUser, getUsers, login}