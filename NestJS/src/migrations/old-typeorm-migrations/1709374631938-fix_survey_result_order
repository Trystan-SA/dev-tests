import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1709374631938 implements MigrationInterface {
    name = 'Migrations1709374631938'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "survey_results"`);
        await queryRunner.query(`CREATE TABLE "survey_results" ("user_id" uuid NOT NULL, "surver_result_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_50fab03b2ea2b675c0ae0520d71" PRIMARY KEY ("surver_result_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
