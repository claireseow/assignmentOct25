import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: String;

    @Column()
    owner_id: number;
    
    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
    
   

}
