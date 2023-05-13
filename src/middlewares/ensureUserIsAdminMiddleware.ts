import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"

export const ensureUserIsAdminMiddleware =async (req: Request, resp: Response, next: NextFunction):Promise<Response|void> => {
    const { admin } = resp.locals

    if(!admin ){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}