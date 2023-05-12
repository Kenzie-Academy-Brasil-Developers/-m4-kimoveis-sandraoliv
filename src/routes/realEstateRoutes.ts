import { Router } from "express";
import { createRealEstateController } from "../controllers/realEstate/createRealEstateController";
import { ensureTokenIsValidMiddleware } from "../middlewares/validateTokenMiddlewarw";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdminMiddleware";
import { serializedUserDataMiddleware } from "../middlewares/serializerMiddleware";
import { realEstateRequestSchema } from "../schemas/realEstateSchema";
import { listRealEstateController } from "../controllers/realEstate/listRealEstateController";
import { ensureAddressIsUniqueMiddleware } from "../middlewares/ensureAddresIsUnique";

export  const realEstatesRoutes: Router = Router()

realEstatesRoutes.post("",
ensureTokenIsValidMiddleware,
ensureAddressIsUniqueMiddleware,
ensureUserIsAdminMiddleware,
serializedUserDataMiddleware(realEstateRequestSchema),
createRealEstateController)

realEstatesRoutes.get("",
listRealEstateController)