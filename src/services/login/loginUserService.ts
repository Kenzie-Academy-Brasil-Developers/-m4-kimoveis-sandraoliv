import { Repository } from "typeorm";
import { TloginRequest } from "../../interfaces/loginInterface";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { compare } from "bcryptjs";

export const loginUserService=async(data:TloginRequest):Promise<string>=>{
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOne({
        where: {
            email: data.email,
        },
    })
    if (!user) {
        throw new AppError('Invalid credentials', 401)
    }
    
    const passwordMatch = await compare(data.password, user.password)
    if (!passwordMatch) {
        throw new AppError('Invalid credentials', 401)
    }


    const token = jwt.sign({}, process.env.SECRET_KEY!, {
        expiresIn: '24h',
        subject: String(user.id),
    })

    return token
}