import { Request, Response } from "express"
import { retrieveRealEstateBycategoryService } from "../../services/category/retrieveRealEstateBycategoryService"
import { TCategory } from "../../interfaces/categoryInterface"

export  const retrieveRealEstateByategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {

const categoryId:number=parseInt(req.params.id)

const results: TCategory = await retrieveRealEstateBycategoryService(categoryId)

return res.json(results)
}

  