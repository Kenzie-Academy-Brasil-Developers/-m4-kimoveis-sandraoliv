import { Request, Response } from "express"
import { listScheduleService } from "../../services/schedules/listScheduleService"
import { RealEstate } from "../../entities"

export const listScheduleController=async(req:Request,res:Response)
:Promise<Response>=>{
const realEstateId:number=parseInt(req.params.id)
    
const schedules:RealEstate= await listScheduleService(realEstateId)
    
return res.json(schedules)
    
}