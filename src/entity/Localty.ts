import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Localty {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    area: string;
  
    @ManyToOne(type => Property)
    @JoinColumn({ name: 'property_id' })
    property: Property

}
