import { z } from "zod"
import { categorieListSchemaResponse, categorieSchema, requestCategorieSchema } from "../schemas/categorieSchema"

export  type TCategory=z.infer<typeof categorieSchema>

export type TCategoryRequest=z.infer<typeof requestCategorieSchema>

export type TCategoryResponse=z.infer<typeof categorieSchema>

export type TCategoriesListResponse=z.infer<typeof categorieListSchemaResponse>
