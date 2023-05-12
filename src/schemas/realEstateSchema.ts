import { z } from "zod";
import { addresSchema } from "./addresSchema";

export const realEstateSchema=z.object({
value:z.number(),
size:z.number() 
})

export const realEstateRequestSchema =realEstateSchema.extend({
id:z.number().int(),
sold:z.boolean().default(false),
createdAt:z.date().or(z.string()),
updatedAt: z.date().or(z.string()),
address:addresSchema
})

export const realEstateResponseListSchema=z.array(realEstateRequestSchema)

