import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category} from "../../entities"
import { AppError } from "../../errors"

export const retrieveRealEstateBycategoryService = async (categoryId: number) => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const category:Category|null = await categoryRepository.findOneBy({
   id:categoryId
  })


  if (!category) {
  throw new AppError('Category not found', 404);
  }

  const findCategory:Category|null = await categoryRepository.findOne({
   where:{
   id:categoryId,
   },
   relations:{realEstate:true}

   })
 
  return findCategory;
};
  








