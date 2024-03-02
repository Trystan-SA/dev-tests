import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1709374631937 implements MigrationInterface {
    name = 'Migrations1709374631937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`CREATE TABLE "questions" ("step_id" uuid NOT NULL, "step_title" text NOT NULL, "step_index" integer NOT NULL, "question_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "question_index" integer NOT NULL, "question_label" text NOT NULL,  CONSTRAINT "PK_8e940ecc478000e09fa8b008ec6" PRIMARY KEY ("question_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
