import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"

export const ensureUserIsAdminMiddleware = (req: Request, resp: Response, next: NextFunction): void => {
    const { admin } = resp.locals
   
    if(!admin ){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}