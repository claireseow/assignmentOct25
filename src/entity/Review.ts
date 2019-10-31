import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from "typeorm";
import { Property } from "./Property";
import { User } from "./User";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    comment: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToMany(type => Property)
    @JoinTable({
        name: 'review_property',
        joinColumns: [{ name: 'property_id' }],
        inverseJoinColumns: [{ name: 'user_id' }],
    })
    property: Property[]

}
