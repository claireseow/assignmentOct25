import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    property_id: number;

    @Column()
    price: number;

    @Column()
    booking_date: Date;

    @Column()
    user_id: number;

    @Column()
    check_id: Date;
    
    @Column()
    check_out: Date;
    
    @Column()
    created_at: Date;
    
    @Column()
    updated_at: Date;
    

}
