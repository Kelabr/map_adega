import { app } from "./config/app.js";


app.listen({port:3333}, ()=>{
    console.log("Server running - http://localhost:3333")
})