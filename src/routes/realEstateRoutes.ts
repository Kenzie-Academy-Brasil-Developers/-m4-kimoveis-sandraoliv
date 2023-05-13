import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate/createRealEstateController";
import { ensureTokenIsValidMiddleware } from "../middlewares/validateTokenMiddlewarw";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdminMiddleware";
import { serializedUserDataMiddleware } from "../middlewares/serializerMiddleware";
import { realEstateSchema } from "../schemas/realEstateSchema";
import { listRealEstateController } from "../controllers/realEstate/listRealEstateController";
import { ensureNameCategoryIsUniqueMiddleware } from "../middlewares/ensureCategoryNameIsUniqueMiddleware";

export  const realEstatesRoutes: Router = Router()

realEstatesRoutes.post("",
ensureTokenIsValidMiddleware,
ensureUserIsAdminMiddleware,
serializedUserDataMiddleware(realEstateSchema),
ensureNameCategoryIsUniqueMiddleware,
createRealEstateController)

realEstatesRoutes.get("",
listRealEstateController)