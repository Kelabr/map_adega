import { userController } from "../controller/userController.js"

export default function useRouter(app, options){
    app.post("/user", userController.registerUser)
}