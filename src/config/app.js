import fastify from "fastify";
import cookie from "@fastify/cookie"
import cors from "@fastify/cors"
import jwt from "@fastify/jwt"

const app = fastify()

export {app}