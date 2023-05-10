import { z } from "zod";
import { userListSchemaResponse,  userSchema,  userSchemaRequest,  userSchemaResponse} from "../schemas/userschemas";
import { DeepPartial } from "typeorm";

export  type TUsers=z.infer<typeof userSchema>

export type TUserRequest=z.infer<typeof userSchemaRequest>

export type TUserResponse=z.infer<typeof userSchemaResponse>

export type TUserListResponse=z.infer<typeof userListSchemaResponse>

export type TUserUpdate=DeepPartial< TUsers>

