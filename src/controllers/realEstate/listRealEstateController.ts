import { Request, Response } from "express"
import { listRealEstateService } from "../../services/realState/listRealEstateService"

export  const listRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {

const realEstateList = await listRealEstateService()
  
return res.json(realEstateList)
}