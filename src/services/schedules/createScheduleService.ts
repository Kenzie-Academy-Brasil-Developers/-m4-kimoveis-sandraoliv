import { Repository } from "typeorm"
import {  TScheduleRequest } from "../../interfaces/scheduleInterface"
import { RealEstate, Schedule, User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

export const createScheduleService=async(body:TScheduleRequest,userId:number):Promise<Schedule>=>{

const realEstateRepository :Repository <RealEstate>=AppDataSource.getRepository(RealEstate)

const userRepository:Repository<User>=AppDataSource.getRepository(User)

const scheduleRepository:Repository<Schedule>=AppDataSource.getRepository(Schedule)

const getIdEstate=body.realEstateId

const findRealEstate:RealEstate|null = await realEstateRepository.findOneBy({
    id:getIdEstate
})

    if(!findRealEstate){
        throw new AppError("RealEstate not found", 404)
    }

const findUser:User|null = await userRepository.findOneBy({
        id:userId
})
        
const date=body.date
const hour=body.hour

const  open:number=8
const final:number=18

const createSchedule=await scheduleRepository.createQueryBuilder("schedule")

.where("schedule.userId=:userId",{userId:userId})
.andWhere("schedule.date=:date",{date})
.andWhere("schedule.hour=:hour",{hour}).getOne()

if(createSchedule){
    throw new AppError(
    "User schedule to this real estate at this date and time already exists", 409);          
}

const scheduleCreated= await scheduleRepository.createQueryBuilder("schedule")
.where("schedule.date=:date and schedule.hour=:hour",{date,hour}).getOne()

if(scheduleCreated){
throw new AppError( "Schedule to this real estate at this date and time already exists",409);
}

const isOpen=parseInt(hour.split(":")[0])

if(isOpen < open || isOpen >= final){
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
}

const verificationDate=new Date(date).getDay()

if(verificationDate === 0|| verificationDate ===6){

    throw new AppError("Invalid date, work days are monday to friday", 400);
}
const schedule={
date,
hour,
realEstate: findRealEstate,
user: findUser!
}

const scheduleReturn :Schedule=scheduleRepository.create(schedule)

await scheduleRepository.save(scheduleReturn)
   
return scheduleReturn

}
