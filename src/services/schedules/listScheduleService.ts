import { Repository } from "typeorm"
import { RealEstate } from "../../entities"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

export const listScheduleService=async(
realEstateId:number):
Promise<RealEstate>=>{
        
const realEstateRepository:Repository<RealEstate>= AppDataSource.getRepository(RealEstate)
    
const schedules:RealEstate|null = await realEstateRepository.findOne({

where: {
id: realEstateId,
},

relations: {

schedules: {
user:true
},

address:true,
category:true
},

})

if (!schedules) {
    throw new AppError('Schedule not found', 404)
}

return schedules

}