import { z } from 'zod'

export const categorieSchema=z.object({
  name: z.string()  
  })

export const requestCategorieSchema=categorieSchema
.extend({ id:z.number().int()})
  
export const categorieListSchemaResponse =
requestCategorieSchema.array()