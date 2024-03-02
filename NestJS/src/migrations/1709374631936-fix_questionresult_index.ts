import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1709374631936 implements MigrationInterface {
    name = 'Migrations1709374631936'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_results" DROP CONSTRAINT "PK_6f2599c17872e10e09f5207db4f"`);
        await queryRunner.query(`ALTER TABLE "question_results" ADD CONSTRAINT "PK_24de3ee564b566a7d5f1b4591cf" PRIMARY KEY ("question_id", "question_result_id")`);
        await queryRunner.query(`ALTER TABLE "question_results" ALTER COLUMN "question_result_id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "question_results" DROP CONSTRAINT "PK_24de3ee564b566a7d5f1b4591cf"`);
        await queryRunner.query(`ALTER TABLE "question_results" ADD CONSTRAINT "PK_2e00dfd39a299ae4f921d794810" PRIMARY KEY ("question_result_id")`);
        await queryRunner.query(`ALTER TABLE "question_results" ALTER COLUMN "question_id" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_results" ALTER COLUMN "question_id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "question_results" DROP CONSTRAINT "PK_2e00dfd39a299ae4f921d794810"`);
        await queryRunner.query(`ALTER TABLE "question_results" ADD CONSTRAINT "PK_24de3ee564b566a7d5f1b4591cf" PRIMARY KEY ("question_id", "question_result_id")`);
        await queryRunner.query(`ALTER TABLE "question_results" ALTER COLUMN "question_result_id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "question_results" DROP CONSTRAINT "PK_24de3ee564b566a7d5f1b4591cf"`);
        await queryRunner.query(`ALTER TABLE "question_results" ADD CONSTRAINT "PK_6f2599c17872e10e09f5207db4f" PRIMARY KEY ("question_id")`);
    }

}
