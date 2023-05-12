import { Request, Response } from "express"
import { TRealEstateList } from "../../interfaces/realEstateInterface"
import { listRealEstateService } from "../../services/realState/listRealEstateService"

export  const listRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {

const realEstateList:TRealEstateList = await listRealEstateService()
  
return res.json(realEstateList)
}