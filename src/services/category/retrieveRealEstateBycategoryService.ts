import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { TCategory } from "../../interfaces/categoryInterface"
import { categorieSchema } from "../../schemas/categorieSchema"
import { AppError } from "../../errors"

export const retrieveRealEstateBycategoryService=async(categoryId:number):

Promise<TCategory>=>{
     
const categoryRepository:Repository<Category>= AppDataSource.getRepository(Category)
    
const results: Category | null = await categoryRepository.findOne({
where: {
id: categoryId,
},
relations: {
realEstate: true,
},
})

if (!results) {
    throw new AppError('Category not found', 404)
}
    
const returnResults: TCategory = categorieSchema.parse(results)
       
return returnResults

}