import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
