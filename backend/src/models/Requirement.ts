import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Software } from "./Software";

@Entity("requirements")
export class Requirement {
  @PrimaryGeneratedColumn("increment")
  public id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Column()
  public priority: Number;

  @Column()
  public complexity: Number;

  @Column()
  public type: Number;

  @Column()
  public version: Number;

  @Column()
  public active: Boolean;

  @ManyToOne(() => Software)
  @JoinColumn({ name: "software_id" })
  public software: Software

  @OneToOne(() => Requirement)
  @JoinColumn({ name: 'requirement_id' })
  public child: Requirement
}
