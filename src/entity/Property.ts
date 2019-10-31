import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { Booking } from "./Booking";
import { Owner } from "./Owner";
import { Tags } from "./Tags";
import { Review } from "./Review";

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
    
    @ManyToOne(type => Owner)
    @JoinColumn({ name: 'owner_id' })
    owner: Owner
 
    @ManyToMany(type => Tags)
    @JoinTable({
        name: 'tags_property',
        joinColumns: [{ name: 'property_id' }],
        inverseJoinColumns: [{ name: 'owner_id' }],
    })
    tags: Tags[]

    @ManyToMany(type => Review)
    @JoinTable({
        name: 'property_review',
        joinColumns: [{ name: 'review_id' }],
        inverseJoinColumns: [{ name: 'review_id' }],
    })
    review: Review[]

}
