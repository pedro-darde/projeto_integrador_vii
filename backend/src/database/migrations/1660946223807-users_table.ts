import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class usersTable1660946223807 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
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
                        name: "email",
                        type: "varchar",
                        length: "120",
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: "profile",
                        type: "varchar",
                        length: "10",
                        isNullable: false,
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "512",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
