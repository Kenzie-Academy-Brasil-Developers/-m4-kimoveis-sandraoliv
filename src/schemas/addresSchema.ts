import { z } from "zod";

export const addresSchema=z.object({
street:z.string(),
zipCode:z.string(),
number:z.string().optional(),
city:z.string(),
state:z.string() 
})

