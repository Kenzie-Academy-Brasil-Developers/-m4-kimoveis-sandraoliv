import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category} from "../../entities"
import { TCategory } from "../../interfaces/categoryInterface"
import { categorieSchema } from "../../schemas/categorieSchema"
import { AppError } from "../../errors"

export const retrieveRealEstateBycategoryService = async (categoryId: number): Promise<TCategory> => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category);

  const category = await categoryRepository.createQueryBuilder('category')
  .leftJoinAndSelect('category.realEstate', 'realEstate')
  .where('category.id = :id', { id: categoryId })
  .getOne();

  if (!category) {
  throw new AppError('Category not found', 404);
  }

  const returnResults: TCategory = categorieSchema.parse(category);

  return returnResults;
};









