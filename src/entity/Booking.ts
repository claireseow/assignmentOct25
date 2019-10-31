import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import { User } from "./User";
import { Property } from "./Property";

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
    
    @ManyToOne(type => User)
    @JoinColumn({ name: 'user_id' })
    user: User
    
    @ManyToOne(type => Property)
    @JoinColumn({ name: 'property_id' })
    property: Property   

}
