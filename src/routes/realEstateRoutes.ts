import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate/createRealEstateController";
import { ensureTokenIsValidMiddleware } from "../middlewares/validateTokenMiddlewarw";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdminMiddleware";
import { serializedUserDataMiddleware } from "../middlewares/serializerMiddleware";
import { realEstateSchema } from "../schemas/realEstateSchema";
import { realEstateRequestSchema } from "../schemas/realEstateSchema";
import { listRealEstateController } from "../controllers/realEstate/listRealEstateController";

export  const realEstatesRoutes: Router = Router()

realEstatesRoutes.post("",
ensureTokenIsValidMiddleware,
ensureUserIsAdminMiddleware,
serializedUserDataMiddleware(realEstateRequestSchema),
createRealEstateController)

realEstatesRoutes.get("",
listRealEstateController)