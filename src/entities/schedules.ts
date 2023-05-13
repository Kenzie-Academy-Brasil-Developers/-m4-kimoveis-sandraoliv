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
    
      @ManyToOne(() => RealEstate,(realEstate)=>realEstate.schedules)
      realEstate: RealEstate;
    
      @ManyToOne(() => User, (users)=>users.schedules)
      user: User;
    
    }
    
    export default Schedule;

