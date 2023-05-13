import { Repository } from "typeorm"
import {  RealEstate } from "../../entities"
import { AppDataSource } from "../../data-source"
import { TRealEstateList } from "../../interfaces/realEstateInterface"

export const listRealEstateService=async(
):
Promise<TRealEstateList>=>{
 
const realEstateRepository:Repository<RealEstate>= AppDataSource.getRepository(RealEstate)

const realEstateList: RealEstate[]|any = await realEstateRepository.find({relations:["address"]})
 
return realEstateList
}