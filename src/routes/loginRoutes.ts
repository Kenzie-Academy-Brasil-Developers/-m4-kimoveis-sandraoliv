import { Router } from 'express'
import { loginUserController } from '../controllers/login/loginUserConroller'

export  const loginRoutes: Router = Router()

loginRoutes.post( "",
loginUserController)