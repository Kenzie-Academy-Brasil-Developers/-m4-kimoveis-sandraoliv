import { Request, Response } from "express"
import { TCategory, TCategoryResponse } from "../interfaces/categoryInterface"
import { createCategoryService } from "../services/createCategoryService"


export const createCategoryController= async(req:Request,res:Response)
   :Promise<Response>=>{

    const categoryData:TCategory=req.body

    const newcategory:TCategoryResponse=await createCategoryService(categoryData)
  
    return res.status(201).json( newcategory)
    
  }