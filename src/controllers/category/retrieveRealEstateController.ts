import { Request, Response } from "express"
import { retrieveRealEstateBycategoryService } from "../../services/category/retrieveRealEstateBycategoryService"
import { Category } from "../../entities"

export  const retrieveRealEstateByategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {

const categoryId:number=parseInt(req.params.id)

const results:Category | null = await retrieveRealEstateBycategoryService(categoryId)

return res.json(results)
}
 