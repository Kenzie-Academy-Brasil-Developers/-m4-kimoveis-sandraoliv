import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate } from "../../entities"
import { TRealEstate, TRealEstateRequest } from "../../interfaces/realEstateInterface"
import { realEstateRequestSchema} from "../../schemas/realEstateSchema"

export  const createRealeEstateService= async(data:TRealEstate)
   :Promise<TRealEstateRequest>=>{

    const realEstateRepository:Repository<RealEstate>=AppDataSource.getRepository(RealEstate)

    const realEstate:RealEstate=realEstateRepository.create(data)

    await realEstateRepository.save(realEstate)

    const newRealEstate = realEstateRequestSchema.parse(realEstate)

    return newRealEstate

}