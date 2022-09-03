import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
