import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1572495013324 implements MigrationInterface {
    name = 'MigrationFileName1572495013324'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "review" ("id" int NOT NULL IDENTITY(1,1), "rating" int NOT NULL, "comment" nvarchar(255) NOT NULL, "user_id" int, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "localty" ("id" int NOT NULL IDENTITY(1,1), "area" nvarchar(255) NOT NULL, "property_id" int, CONSTRAINT "PK_b6410e089dbadfa5c60009d3798" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "review_property" ("property_id" int NOT NULL, "user_id" int NOT NULL, CONSTRAINT "PK_5aabe45fe8f66f9aba56af73eed" PRIMARY KEY ("property_id", "user_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ab01d337fabaa13de52395b116" ON "review_property" ("property_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_8475bc010d1a31574b74113702" ON "review_property" ("user_id") `, undefined);
        await queryRunner.query(`CREATE TABLE "property_review" ("review_id_1" int NOT NULL, "review_id_2" int NOT NULL, CONSTRAINT "PK_6ac4176102860730a2ed4c1132f" PRIMARY KEY ("review_id_1", "review_id_2"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_cfcd8acb0748e34176388b18cc" ON "property_review" ("review_id_1") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_17b926ffc1202d675978c8fc7a" ON "property_review" ("review_id_2") `, undefined);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_81446f2ee100305f42645d4d6c2" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "localty" ADD CONSTRAINT "FK_a9940f9e60664c645f2e74b8448" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "review_property" ADD CONSTRAINT "FK_ab01d337fabaa13de52395b116b" FOREIGN KEY ("property_id") REFERENCES "review"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "review_property" ADD CONSTRAINT "FK_8475bc010d1a31574b741137024" FOREIGN KEY ("user_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_review" ADD CONSTRAINT "FK_cfcd8acb0748e34176388b18cc3" FOREIGN KEY ("review_id_1") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_review" ADD CONSTRAINT "FK_17b926ffc1202d675978c8fc7a6" FOREIGN KEY ("review_id_2") REFERENCES "review"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "property_review" DROP CONSTRAINT "FK_17b926ffc1202d675978c8fc7a6"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_review" DROP CONSTRAINT "FK_cfcd8acb0748e34176388b18cc3"`, undefined);
        await queryRunner.query(`ALTER TABLE "review_property" DROP CONSTRAINT "FK_8475bc010d1a31574b741137024"`, undefined);
        await queryRunner.query(`ALTER TABLE "review_property" DROP CONSTRAINT "FK_ab01d337fabaa13de52395b116b"`, undefined);
        await queryRunner.query(`ALTER TABLE "localty" DROP CONSTRAINT "FK_a9940f9e60664c645f2e74b8448"`, undefined);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_81446f2ee100305f42645d4d6c2"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_17b926ffc1202d675978c8fc7a" ON "property_review"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_cfcd8acb0748e34176388b18cc" ON "property_review"`, undefined);
        await queryRunner.query(`DROP TABLE "property_review"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_8475bc010d1a31574b74113702" ON "review_property"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ab01d337fabaa13de52395b116" ON "review_property"`, undefined);
        await queryRunner.query(`DROP TABLE "review_property"`, undefined);
        await queryRunner.query(`DROP TABLE "localty"`, undefined);
        await queryRunner.query(`DROP TABLE "review"`, undefined);
    }

}
