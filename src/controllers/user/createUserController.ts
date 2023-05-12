import { TUserResponse, TUsers } from "../../interfaces/usersInterfaces"
import { createUserService } from "../../services/user/createUserService"
import { Request, Response } from "express"

export const createUserController= async(req:Request,res:Response)
:Promise<Response>=>{

const userData:TUsers=req.body

const newUser:TUserResponse=await createUserService(userData)
  
 return res.status(201).json(newUser)
    
}