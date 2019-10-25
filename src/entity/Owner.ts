import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    email: String;
    
    @Column()
    contact_no: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;
        

}
