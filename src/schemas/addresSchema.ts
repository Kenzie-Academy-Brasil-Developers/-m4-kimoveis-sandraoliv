import { z } from "zod";

export const addresSchema=z.object({
street:z.string().max(45),
zipCode:z.string().max(8),
number:z.string().max(8).nullish(),
city:z.string().max(20),
state:z.string().max(2) 
})

export const addresSchemaResponse=addresSchema.extend({id:z.number()})

