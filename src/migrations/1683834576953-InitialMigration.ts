import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1683834576953 implements MigrationInterface {
    name = 'InitialMigration1683834576953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_e61e0268dc44647ddc3d674dfe8"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_a4c0f0067e7e6294ef4e02e2c9a"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_3e02817b25e8f0c48f51c7ac571"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "ZipCode" TO "zipCode"`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "usersId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "REL_a4c0f0067e7e6294ef4e02e2c9"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "addressesId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "addressId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_19c54f24597b318be3892114c75" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "schedules" DROP CONSTRAINT "FK_19c54f24597b318be3892114c75"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "UQ_44ae17efa35575b6a6f83b35ee5"`);
        await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "categoriesId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD "addressesId" integer`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "REL_a4c0f0067e7e6294ef4e02e2c9" UNIQUE ("addressesId")`);
        await queryRunner.query(`ALTER TABLE "schedules" RENAME COLUMN "userId" TO "usersId"`);
        await queryRunner.query(`ALTER TABLE "addresses" RENAME COLUMN "zipCode" TO "ZipCode"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_3e02817b25e8f0c48f51c7ac571" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_a4c0f0067e7e6294ef4e02e2c9a" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules" ADD CONSTRAINT "FK_e61e0268dc44647ddc3d674dfe8" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
