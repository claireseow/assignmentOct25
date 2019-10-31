import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Tags {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @ManyToMany(type => Property)
    @JoinTable({
        name: 'property_tags',
        joinColumns: [{ name: 'tag_id' }],
        inverseJoinColumns: [{ name: 'property_id' }],
    })
    property: Property[]


}
