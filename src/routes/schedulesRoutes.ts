import { Router } from "express";
import { createScheduleController } from "../controllers/schedules/createScheduleController";
import { ensureTokenIsValidMiddleware } from "../middlewares/validateTokenMiddlewarw";
import { listScheduleController } from "../controllers/schedules/listScheduleController";
import { ensureUserIsAdminMiddleware } from "../middlewares/ensureUserIsAdminMiddleware";
import { serializedUserDataMiddleware } from "../middlewares/serializerMiddleware";
import { scheduleSchemaRequest } from "../schemas/schedulesSchema";

export  const schedulesRoutes: Router = Router()

schedulesRoutes.post("",
ensureTokenIsValidMiddleware,
serializedUserDataMiddleware(scheduleSchemaRequest),
createScheduleController)

schedulesRoutes.get("/realEstate/:id",
ensureTokenIsValidMiddleware,
ensureUserIsAdminMiddleware,
listScheduleController)
