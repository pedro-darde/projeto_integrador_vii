import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class softwareTable1660946314268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "softwares",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
            length: "120",
            isNullable: false,
          },
          {
            name: "description",
            type: "varchar",
            length: "256",
            isNullable: false,
          },
          {
            name: "start_date",
            type: "timestamp",
            isNullable: false,
            default: "now()",
          },
          {
            name: "end_date",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "id_user",
            type: "integer",
            isNullable: false,
            unsigned: true,
          },
        ],
        foreignKeys: [
          {
            name: "UserSoftware",
            columnNames: ["id_user"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("softwares");
  }
}
