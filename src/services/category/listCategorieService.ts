import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { TCategoriesListResponse } from "../../interfaces/categoryInterface"
import { categorieListSchemaResponse } from "../../schemas/categorieSchema"

export const listCategorieService=async(
    ):
     Promise<TCategoriesListResponse>=>{
 
       const categoryRepository:Repository<Category>= AppDataSource.getRepository(Category)

       const categories: Category[] = await categoryRepository.find()

       const returnCategories: TCategoriesListResponse = categorieListSchemaResponse.parse(categories)
   
       return returnCategories
     }