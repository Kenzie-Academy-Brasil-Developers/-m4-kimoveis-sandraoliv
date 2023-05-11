import { getRounds, hashSync } from "bcryptjs"
import { PrimaryGeneratedColumn , Column, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate, OneToMany} from "typeorm"

import Schedule from "./schedules"

@Entity('users')
class User {
@PrimaryGeneratedColumn("increment")
id :number

@Column({type:"varchar", length:45} )
name:string

@Column({type:"varchar" ,length:45 ,unique:true})
email:string 

@Column({type:"boolean", default:false})
admin:boolean

@Column({type:"varchar", length:120})
password:string

@CreateDateColumn({type:"date"})
createdAt:string

@UpdateDateColumn({type:"date"})
updatedAt:string;


@DeleteDateColumn({nullable:true ,type:"date"})
deletedAt?:string|null;

@BeforeInsert()
@BeforeUpdate()
hashPassword() {
    const isEncrypted: number = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }

@OneToMany(() =>Schedule, (schedules) => schedules.user)
schedules: Schedule[]


}
export default User;








 

