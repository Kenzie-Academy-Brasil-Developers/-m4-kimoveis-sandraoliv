import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities";

export const ensureNameCategoryIsUniqueMiddleware=async (
    req: Request,
    res: Response,
    next: NextFunction):Promise<Response|void>=> {
    const{name} = req.body;
  
   if (name){
     const categoryRepository:Repository<Category> =  AppDataSource.getRepository(Category);
     const existingCategory = await categoryRepository.findOne({ where: {name} });
    
     if (existingCategory) {
      throw new AppError('Category already exists', 409);
     }
   }
    next()
    }