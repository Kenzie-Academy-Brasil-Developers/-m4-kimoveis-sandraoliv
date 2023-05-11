import { Router } from "express"
import { createCategoryController } from "../controllers/category/createCategoryController"
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdminMiddleware"
import { listCategoriesController } from "../controllers/category/listCategoriesController"
import { ensureTokenIsValidMiddleware } from "../middlewares/validateTokenMiddlewarw"
import { ensureNameCategoryIsUniqueMiddleware } from "../middlewares/ensureCategoryNameIsUniqueMiddleware"
import { retrieveRealEstateByategoryController} from "../controllers/category/retrieveRealEstateController"

export  const categoryRoutes: Router = Router()

categoryRoutes.post("",
ensureTokenIsValidMiddleware,
ensureUserIsAdminMiddleware,
ensureNameCategoryIsUniqueMiddleware,
createCategoryController
)

categoryRoutes.get("",
listCategoriesController)

categoryRoutes.get("/:id/realEstate",
retrieveRealEstateByategoryController)