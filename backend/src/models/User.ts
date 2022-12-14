import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    public id: number

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column()
    public profile:  string

    @Column()
    public password: string
}