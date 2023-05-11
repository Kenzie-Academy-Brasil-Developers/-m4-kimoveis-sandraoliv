import { Request, Response } from "express"
import { TRealEstateList, TRealEstateRequest } from "../../interfaces/realEstateInterface"
import { retrieveRealEstateBycategoryService } from "../../services/category/retrieveRealEstateBycategoryService"
import { Category } from "../../entities"
import { categorieSchema } from "../../schemas/categorieSchema"
import { TCategory } from "../../interfaces/categoryInterface"


export  const retrieveRealEstateByategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const categoryId:number=parseInt(req.params.id)

    const results: TCategory = await retrieveRealEstateBycategoryService(categoryId)

    return res.json(results)
}