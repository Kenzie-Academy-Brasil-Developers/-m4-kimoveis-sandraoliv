import { Router } from "express";
import { createScheduleController } from "../controllers/schedules/createScheduleController";
import { ensureTokenIsValidMiddleware } from "../middlewares/validateTokenMiddlewarw";
import { listScheduleController } from "../controllers/schedules/listScheduleController";

export  const schedulesRoutes: Router = Router()

schedulesRoutes.post("",
ensureTokenIsValidMiddleware,
createScheduleController)

schedulesRoutes.get("/realEstate/:id",
listScheduleController)
