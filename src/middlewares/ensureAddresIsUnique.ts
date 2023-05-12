import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppError } from "../errors";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";

export const ensureAddressIsUniqueMiddleware=async (
    req: Request,
    res: Response,
    next: NextFunction):Promise<Response|void>=> {
    const{address} = req.body;
  
if (address){
     const realEstateRepository:Repository<RealEstate> =  AppDataSource.getRepository(RealEstate);
     const existingRealEstate = await realEstateRepository.findOne({ where: {address} });
    
     if (existingRealEstate) {
      throw new AppError('RealEstate already exists', 409);
}
   }
    next()
}