import { Request, Response } from "express"
import { listUserService } from "../../services/user/listUserService"
import { TUserListResponse } from "../../interfaces/usersInterfaces"

 export  const listUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const users:TUserListResponse = await listUserService()

    return res.json(users)
}