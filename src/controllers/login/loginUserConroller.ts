import { Request, Response } from "express";
import { TloginRequest } from "../../interfaces/loginInterface";
import { loginUserService } from "../../services/login/loginUserService";

export  const loginUserController =async(req:Request,res:Response):Promise<Response>=>{
    
    const loginData:TloginRequest=req.body

    const token=await loginUserService(loginData)

    return res.json({token})
}