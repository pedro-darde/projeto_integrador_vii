import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class requirementsTable1660946351511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "requirements",
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
                    name: "priority",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "complexity",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "type",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: "version",
                    type: "integer",
                    isNullable: false,
                    default: 1,
                },
                {
                    name: "active",
                    type: "boolean",
                    isNullable: false,
                    default: true,
                },
                {
                    name: "id_software",
                    type: "integer",
                    isNullable: false,
                },
                {
                    name: "id_requirement",
                    type: "integer",
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    name: "RequirementSoftware",
                    columnNames: ["id_software"],
                    referencedTableName: "softwares",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                },
                {
                    name: "RequirementParent",
                    columnNames: ["id_requirement"],
                    referencedTableName: "requirements",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("requirements")
    }

}
