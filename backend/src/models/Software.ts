import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Requirement } from "./Requirement";

@Entity("softwares")
export class Software {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public start_date: string;

  @Column()
  public end_date: string;

  @OneToMany(() => Requirement, (req) => req.software, { eager: true })
  requirements: Requirement[];
}
