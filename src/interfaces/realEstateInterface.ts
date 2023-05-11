import { z } from "zod"
import { realEstateRequestSchema, realEstateResponseListSchema, realEstateSchema } from "../schemas/realEstateSchema"

export  type TRealEstate=z.infer<typeof realEstateSchema>

export  type TRealEstateList=z.infer<typeof realEstateResponseListSchema>

export type TRealEstateRequest=z.infer< typeof realEstateRequestSchema>