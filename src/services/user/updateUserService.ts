import { Repository } from "typeorm";
import { TUserUpdate } from "../../interfaces/usersInterfaces";
import { TUserResponse } from "../../interfaces/usersInterfaces";
import User from "../../entities/users.entity";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/userschemas";

export const updateUserService = async ( userData:TUserUpdate,userId:number): Promise<TUserResponse> => {

const userRepository: Repository<User> = AppDataSource.getRepository(User);

const userToUpdate: User | null = await userRepository.findOneBy({id:userId });

const updatedUser = userRepository.create({ 
...userToUpdate, 
...userData });

await userRepository.save(updatedUser);
  
const newUser:TUserResponse = userSchemaResponse.parse(updatedUser);
return newUser
}