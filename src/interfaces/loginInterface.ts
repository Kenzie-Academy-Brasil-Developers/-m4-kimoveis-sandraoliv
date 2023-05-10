import { z } from "zod";
import { requestLoginSchema } from "../schemas/loginSchema";

export  type TloginRequest=z.infer<typeof requestLoginSchema>