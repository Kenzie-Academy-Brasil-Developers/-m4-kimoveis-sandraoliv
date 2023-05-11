import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import User from "../../entities/users.entity"
import { TUserListResponse } from "../../interfaces/usersInterfaces"
import { userListSchemaResponse } from "../../schemas/userschemas"

export const listUserService=async(
     ):
      Promise<TUserListResponse>=>{
  
        const userRepository:Repository<User>= AppDataSource.getRepository(User)

        const users: User[] = await userRepository.find()

        const returnUsers: TUserListResponse = userListSchemaResponse.parse(users)
    
        return returnUsers
      }