import { z } from "zod";

export const realEstateSchema=z.object({
    value:z.number(),
    size:z.number() 
})

export const realEstateRequestSchema =realEstateSchema.extend({
    id:z.number().int(),
    sold:z.boolean().default(false),
    createdAt:z.date().or(z.string()),
    updatedAt: z.date().or(z.string())
})

export const realEstateResponseListSchema=z.array(realEstateSchema)

