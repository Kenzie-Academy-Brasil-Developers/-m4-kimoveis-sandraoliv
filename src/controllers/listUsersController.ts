import { Request, Response } from "express"
import { listUserService } from "../services/listUserService"
import { TUserListResponse } from "../interfaces/usersInterfaces"

 export  const listUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const users:TUserListResponse = await listUserService()

    return res.json(users)
}