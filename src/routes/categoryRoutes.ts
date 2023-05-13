import { Router } from "express"
import { createCategoryController } from "../controllers/category/createCategoryController"
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdminMiddleware"
import { listCategoriesController } from "../controllers/category/listCategoriesController"
import { ensureTokenIsValidMiddleware } from "../middlewares/validateTokenMiddlewarw"
import { ensureNameCategoryIsUniqueMiddleware } from "../middlewares/ensureCategoryNameIsUniqueMiddleware"
import { retrieveRealEstateByategoryController} from "../controllers/category/retrieveRealEstateController"
import { categorieSchema } from "../schemas/categorieSchema"
import { serializedUserDataMiddleware } from "../middlewares/serializerMiddleware"

export  const categoryRoutes: Router = Router()

categoryRoutes.post("",
ensureTokenIsValidMiddleware,
ensureUserIsAdminMiddleware,
serializedUserDataMiddleware(categorieSchema),
ensureNameCategoryIsUniqueMiddleware,
createCategoryController
)

categoryRoutes.get("",
listCategoriesController)

categoryRoutes.get("/:id/realEstate",
ensureNameCategoryIsUniqueMiddleware,
retrieveRealEstateByategoryController)