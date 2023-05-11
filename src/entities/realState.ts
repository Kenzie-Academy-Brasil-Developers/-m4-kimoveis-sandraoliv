import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./addresses.entitie";
import Category from "./categories.entities";
import Schedule from "./schedules";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean" ,default:false})
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number|string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({type:"date"})
  createdAt:string

  @UpdateDateColumn()
  updatedAt:string;

  @OneToMany(()=>Schedule,(schedules)=>schedules.realEstate)
  schedules:Schedule[]

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address


  @ManyToOne(() => Category ,(categories)=>categories.realEstate)
  category: Category;
}

export default RealEstate;