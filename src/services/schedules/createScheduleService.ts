import { Repository } from "typeorm"
import { TSchedule } from "../../interfaces/scheduleInterface"
import { Schedule } from "../../entities"
import { AppDataSource } from "../../data-source"
import {  schedulesSchema } from "../../schemas/schedulesSchema"

export const createScheduleService=async(data:TSchedule):Promise<TSchedule>=>{
  
const scheduleRepository:Repository<Schedule>=AppDataSource.getRepository(Schedule)

const schedule:Schedule=scheduleRepository.create(data)

await scheduleRepository.save(schedule)

const newSchedule: TSchedule = schedulesSchema.parse(schedule)
    
return  newSchedule

}
