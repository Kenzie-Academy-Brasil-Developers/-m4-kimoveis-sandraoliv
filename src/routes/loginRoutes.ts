import { Router } from 'express'
import { loginUserController } from '../controllers/loginUserConroller'

export  const loginRoutes: Router = Router()

loginRoutes.post( "",
loginUserController)