import { Request, Response } from "express"
import { TSchedule, TScheduleRequest } from "../../interfaces/scheduleInterface"
import { createScheduleService } from "../../services/schedules/createScheduleService"

export const createScheduleController= async(req:Request,res:Response)
:Promise<Response>=>{
    
const body:TScheduleRequest=req.body
const userId:number=res.locals.id

await createScheduleService(body,userId)
  
return res.status(201).json( {message:"Schedule created"})
    
}