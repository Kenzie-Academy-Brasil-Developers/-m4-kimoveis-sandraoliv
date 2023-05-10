import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realState";


@Entity("schedules")
class Schedule{
  
      @PrimaryGeneratedColumn("increment")
      id: number;
    
      @CreateDateColumn({type:"date"})
      date: string;
    
      @Column({ type: "time" })
      hour: string;
    
      @ManyToOne(() => RealEstate,(real_estate)=>real_estate.schedule)
      real_estate: RealEstate;
    
      @ManyToOne(() => User, (users)=>users.schedules)
      users: User;
    
    }
    
    export default Schedule;

