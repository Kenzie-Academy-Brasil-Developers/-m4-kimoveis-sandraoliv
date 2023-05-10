import{z}from "zod"

  export   const userSchema = z.object({
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120),
  })
 
  export const  userSchemaRequest = userSchema.extend({
    id: z.number().int(),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
    deletedAt: z.date().or(z.string()).nullish(),
  })
 
  export const userSchemaResponse=userSchemaRequest.omit({password:true})

  export const userListSchemaResponse = z.array(userSchemaResponse)

  export const userUpdateSchema=userSchemaRequest.omit({admin:true}).deepPartial()



  

