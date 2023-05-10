import { Router } from "express"
import { createCategoryController } from "../controllers/createCategoryController"
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdminMiddleware"
import { listCategoriesController } from "../controllers/listCategoriesController"
import { ensureTokenIsValidMiddleware } from "../middlewares/validateTokenMiddlewarw"
import { ensureNameCategoryIsUniqueMiddleware } from "../middlewares/ensureCategoryNameIsUniqueMiddleware"

export  const categoryRoutes: Router = Router()

categoryRoutes.post("",
ensureTokenIsValidMiddleware,
ensureUserIsAdminMiddleware,
ensureNameCategoryIsUniqueMiddleware,
createCategoryController
)

categoryRoutes.get("",
listCategoriesController)