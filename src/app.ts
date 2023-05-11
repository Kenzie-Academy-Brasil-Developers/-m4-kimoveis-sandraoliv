import "reflect-metadata"
import "express-async-errors"
import express, { Application } from "express"
import { handleErros } from "./errors"
import { userRoutes } from "./routes/userRoutes"
import { loginRoutes } from "./routes/loginRoutes"
import { categoryRoutes } from "./routes/categoryRoutes"
import { realEstatesRoutes } from "./routes/realEstateRoutes"


const app:Application = express()
app.use(express.json())

app.use("/users", userRoutes)

app.use("/login",loginRoutes)

app.use("/categories",categoryRoutes)

app.use("/realEstate",realEstatesRoutes)

app.use(handleErros)

export default app