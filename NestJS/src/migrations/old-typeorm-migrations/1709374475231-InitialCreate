import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1709374475231 implements MigrationInterface {
    name = 'Migrations1709374475231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "gender" text, "birthYear" integer, "degree" text, "workSituation" text, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "questions" ("question_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "question_index" integer NOT NULL, "question_label" text NOT NULL, "step_id" uuid NOT NULL, "step_title" text NOT NULL, "step_index" integer NOT NULL, CONSTRAINT "PK_8e940ecc478000e09fa8b008ec6" PRIMARY KEY ("question_id"))`);
        await queryRunner.query(`CREATE TABLE "survey_results" ("surver_result_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_50fab03b2ea2b675c0ae0520d71" PRIMARY KEY ("surver_result_id"))`);
        await queryRunner.query(`CREATE TABLE "question_results" ("question_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "question_result_id" uuid NOT NULL, "answer_id" uuid NOT NULL, "survey_result_id" uuid NOT NULL, "created_at" date NOT NULL DEFAULT now(), "answer" integer NOT NULL, "answer_label" text NOT NULL, CONSTRAINT "PK_6f2599c17872e10e09f5207db4f" PRIMARY KEY ("question_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6f2599c17872e10e09f5207db4" ON "question_results" ("question_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_ed5140c720bf7c1dbe42e15174" ON "question_results" ("answer_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_087abaa409f340c373e96cc0f1" ON "question_results" ("survey_result_id") `);
        await queryRunner.query(`CREATE TABLE "modes" ("workoscope_result_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "survey_result_id" uuid NOT NULL, "scores" text NOT NULL, CONSTRAINT "PK_444c1f2f4ac31f9da2e5d137bdd" PRIMARY KEY ("workoscope_result_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "modes"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_087abaa409f340c373e96cc0f1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ed5140c720bf7c1dbe42e15174"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6f2599c17872e10e09f5207db4"`);
        await queryRunner.query(`DROP TABLE "question_results"`);
        await queryRunner.query(`DROP TABLE "survey_results"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
