import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {TUserResponse, TUsers } from "../../interfaces/usersInterfaces";
import User from "../../entities/users.entity";
import { userSchemaResponse } from "../../schemas/userschemas";

export  const createUserService= async(data:TUsers)
   :Promise<TUserResponse>=>{

    const userRepository:Repository<User>=AppDataSource.getRepository(User)

    const user:User=userRepository.create(data)

    await userRepository.save(user)

    const newUser: TUserResponse = userSchemaResponse.parse(user)
    return newUser

}