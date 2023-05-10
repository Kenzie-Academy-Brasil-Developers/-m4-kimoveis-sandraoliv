import { z } from 'zod'

export const realStateSchema=z.object({
    id:z.number(),
    date:z.string(),
    hour:z.string(),
    realEstateId:z.number().positive(),
    userId:z.number()
})