import { Request, Response } from "express"
import { TCategoriesListResponse } from "../../interfaces/categoryInterface"
import { listCategorieService } from "../../services/category/listCategorieService"

export const listCategoriesController=async(req:Request,res:Response):Promise<Response>=>{
    
const categories:TCategoriesListResponse= await listCategorieService()

return res.json(categories)

}