import { Request, Response } from "express"
import { TSchedule } from "../../interfaces/scheduleInterface"
import { createScheduleService } from "../../services/schedules/createScheduleService"

export const createScheduleController= async(req:Request,res:Response)
:Promise<Response>=>{

const ScheduleData:TSchedule=req.body

const newSchedule:TSchedule=await createScheduleService(ScheduleData)
  
return res.status(201).json( newSchedule)
    
}