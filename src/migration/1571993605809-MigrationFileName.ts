import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1571993605809 implements MigrationInterface {
    name = 'MigrationFileName1571993605809'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "booking" ("id" int NOT NULL IDENTITY(1,1), "property_id" int NOT NULL, "price" int NOT NULL, "booking_date" datetime NOT NULL, "user_id" int NOT NULL, "check_id" datetime NOT NULL, "check_out" datetime NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "owner" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "contact_no" int NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property" ("id" int NOT NULL IDENTITY(1,1), "address" nvarchar(255) NOT NULL, "owner_id" int NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "contact_no" int NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "property"`, undefined);
        await queryRunner.query(`DROP TABLE "owner"`, undefined);
        await queryRunner.query(`DROP TABLE "booking"`, undefined);
    }

}
