import { PrimaryGeneratedColumn , Column, Entity, OneToMany} from "typeorm"
import RealEstate from "./realState";

@Entity("categories")
class Category{
    @PrimaryGeneratedColumn("increment")
    id :number
    
    @Column({type:"varchar", length:45 ,unique:true} )
    name:string
    
    @OneToMany(() =>RealEstate ,(real_estate)=>real_estate.category)
    realEstate: RealEstate[];
}
export default Category