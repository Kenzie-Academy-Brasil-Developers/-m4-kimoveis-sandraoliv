import { z } from 'zod'

export const categorieSchema=z.object({
  id:z.number(),
  name: z.string()  
  })

export const requestCategorieSchema=categorieSchema
.omit({id:true})

export const categorySchemaResponse=
categorieSchema
   
export const categorieListSchemaResponse =
 z.array(categorieSchema)