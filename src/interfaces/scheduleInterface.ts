import { z } from "zod";
import { scheduleListSchemaResponse, scheduleSchemaRequest, schedulesSchema } from "../schemas/schedulesSchema";

export type TSchedule=z.infer<typeof schedulesSchema>

export type TScheduleRequest=z.infer<typeof scheduleSchemaRequest>

export type TScheduleListResponse=z.infer<typeof scheduleListSchemaResponse>
