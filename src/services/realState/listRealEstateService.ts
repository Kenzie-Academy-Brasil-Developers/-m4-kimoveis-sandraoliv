import { Repository } from "typeorm"
import {  RealEstate } from "../../entities"
import { AppDataSource } from "../../data-source"
import { TRealEstateList } from "../../interfaces/realEstateInterface"
import { realEstateResponseListSchema } from "../../schemas/realEstateSchema"

export const listRealEstateService=async(
):
Promise<TRealEstateList>=>{
 
const realEstateRepository:Repository<RealEstate>= AppDataSource.getRepository(RealEstate)

const realEstateList: RealEstate[] = await realEstateRepository.find()

const returnRealEstateList: TRealEstateList = realEstateResponseListSchema.parse(realEstateList)
   
return returnRealEstateList
}