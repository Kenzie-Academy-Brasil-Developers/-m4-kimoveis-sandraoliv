import { z } from "zod";
import { addresSchema, addresSchemaResponse } from "./addresSchema";
import { requestCategorieSchema } from "./categorieSchema";

 export const realEstateSchema = z.object({
    value: z.string().or(z.number()),
    size: z.number().int().positive(),
    address:addresSchema,
   categoryId: z.number(),
  });
 export const realEstateRequestSchema = realEstateSchema
    .omit({ categoryId: true })
    .extend({
    id: z.number(),
    updatedAt: z.date().or(z.string()),
    createdAt: z.date().or(z.string()),
    category: requestCategorieSchema,
    address:addresSchemaResponse,
    sold: z.boolean().default(false),
    });

export const realEstateResponseListSchema=realEstateRequestSchema.array()

