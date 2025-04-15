import {prisma} from "../config/db.js"

async function createUser(name, email, tel, password){
    const newUser = await prisma.users.create({
        data:{
            name:name,
            email:email,
            tel:tel,
            password:password
        }
    })

    return newUser
}

async function getUsers(){
    const Users = await prisma.users.findMany()

    return Users
}


export {createUser, getUsers}