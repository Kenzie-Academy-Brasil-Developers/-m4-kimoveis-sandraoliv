import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";


export const ensureIdExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const { id } = req.params
  
      const userRepository: Repository<User> = AppDataSource.getRepository(User);
      const existingUser = await userRepository.findOneBy({id: Number(id)});
  
      if (!existingUser) {
        throw new AppError('User not found', 404);
      }
      
    next();
  };
  