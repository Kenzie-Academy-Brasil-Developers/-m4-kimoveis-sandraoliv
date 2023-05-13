import { Repository } from "typeorm";
import User from "../entities/users.entity";
import { AppError } from "../errors";
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";

export const ensureEmailIsUniqueMiddleware=async (
  req: Request,
  res: Response,
  next: NextFunction):Promise<Response|void>=> {
  const{email} = req.body;
  
  if (email){
     const userRepository:Repository<User> =  AppDataSource.getRepository(User);
     const existinguser = await userRepository.findOne({ where: {email} });
    
     if (existinguser) {
      throw new AppError('Email already exists', 409);
     }
  }
    next()
}

