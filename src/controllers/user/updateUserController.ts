import { Request, Response } from "express";
import { TUserRequest, TUserResponse } from "../../interfaces/usersInterfaces";
import { updateUserService } from "../../services/user/updateUserService";

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
 
const userId:number=parseInt(req.params.id)
    
const data:TUserRequest=req.body

const newUser:TUserResponse = await updateUserService( data,userId);

return res.json(newUser)
 
};