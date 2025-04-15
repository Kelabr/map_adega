import fastify from "fastify";
import cookie from "@fastify/cookie"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"
import useRouter from "../router/userRouter.js";

const app = fastify()

app.register(useRouter, {prefix:"api"})

export {app}