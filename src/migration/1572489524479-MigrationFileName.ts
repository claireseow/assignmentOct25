import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1572489524479 implements MigrationInterface {
    name = 'MigrationFileName1572489524479'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "tags" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, CONSTRAINT "PK_e7dc17249a1148a1970748eda99" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "payments" ("id" int NOT NULL IDENTITY(1,1), "status" nvarchar(255) NOT NULL, "amount" int NOT NULL, "booking_id" int NOT NULL, CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property_tags" ("tag_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_cef86cb1da5db95acc0edebed67" PRIMARY KEY ("tag_id", "property_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_de9999220090d8e40bcf19c6e7" ON "property_tags" ("tag_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_4fa9ab6a3dde65dba931098708" ON "property_tags" ("property_id") `, undefined);
        await queryRunner.query(`CREATE TABLE "tags_property" ("property_id" int NOT NULL, "owner_id" int NOT NULL, CONSTRAINT "PK_9e9c8ea354a48c90570f77fd30e" PRIMARY KEY ("property_id", "owner_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_c8a7880431a01354230f9fc241" ON "tags_property" ("property_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a210c5a9c96492ef1d535adde4" ON "tags_property" ("owner_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_2541d2fb798d385a0521553370d" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_5597161ba02971a62c629fc5a44" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_e86edf76dc2424f123b9023a2b2" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tags" ADD CONSTRAINT "FK_de9999220090d8e40bcf19c6e7d" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tags" ADD CONSTRAINT "FK_4fa9ab6a3dde65dba9310987082" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tags_property" ADD CONSTRAINT "FK_c8a7880431a01354230f9fc2411" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tags_property" ADD CONSTRAINT "FK_a210c5a9c96492ef1d535adde42" FOREIGN KEY ("owner_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tags_property" DROP CONSTRAINT "FK_a210c5a9c96492ef1d535adde42"`, undefined);
        await queryRunner.query(`ALTER TABLE "tags_property" DROP CONSTRAINT "FK_c8a7880431a01354230f9fc2411"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tags" DROP CONSTRAINT "FK_4fa9ab6a3dde65dba9310987082"`, undefined);
        await queryRunner.query(`ALTER TABLE "property_tags" DROP CONSTRAINT "FK_de9999220090d8e40bcf19c6e7d"`, undefined);
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_e86edf76dc2424f123b9023a2b2"`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_5597161ba02971a62c629fc5a44"`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53"`, undefined);
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_2541d2fb798d385a0521553370d"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a210c5a9c96492ef1d535adde4" ON "tags_property"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_c8a7880431a01354230f9fc241" ON "tags_property"`, undefined);
        await queryRunner.query(`DROP TABLE "tags_property"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_4fa9ab6a3dde65dba931098708" ON "property_tags"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_de9999220090d8e40bcf19c6e7" ON "property_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "property_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "payments"`, undefined);
        await queryRunner.query(`DROP TABLE "tags"`, undefined);
    }

}
