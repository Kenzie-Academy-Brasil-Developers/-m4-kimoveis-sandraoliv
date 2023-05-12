import { Request, Response } from "express"
import { TRealEstate, TRealEstateRequest } from "../../interfaces/realEstateInterface"
import { createRealeEstateService } from "../../services/realState/createRealEstateService"

export const createRealEstateController= async(req:Request,res:Response)
:Promise<Response>=>{

const data:TRealEstate=req.body

const newRealEstate:TRealEstateRequest=await createRealeEstateService(data)
  
return res.status(201).json(newRealEstate)
    
}
