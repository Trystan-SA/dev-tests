import { Migration } from '@mikro-orm/migrations';

export class Migration20240302153926 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "answers" ("answer_id" uuid not null default uuid_generate_v4(), "answer" int not null, "answer_label" text not null, "created_at" timestamptz(6) not null default now(), constraint "answers_pkey" primary key ("answer_id"));');

    this.addSql('create table "migrations" ("id" serial primary key, "timestamp" bigint not null, "name" varchar(255) not null);');

    this.addSql('create table "modes" ("mode_id" uuid not null default uuid_generate_v4(), "survey_result_id" uuid not null, "scores" text not null, constraint "modes_pkey" primary key ("mode_id"));');

    this.addSql('create table "question_results" ("question_result_id" uuid not null default uuid_generate_v4(), "question_id" uuid not null, "answer_id" uuid not null, "survey_result_id" uuid not null, "created_at" date not null default now(), constraint "question_results_pkey" primary key ("question_result_id"));');
    this.addSql('create index "IDX_6f2599c17872e10e09f5207db4" on "question_results" ("question_id");');
    this.addSql('create index "IDX_ed5140c720bf7c1dbe42e15174" on "question_results" ("answer_id");');
    this.addSql('create index "IDX_087abaa409f340c373e96cc0f1" on "question_results" ("survey_result_id");');

    this.addSql('create table "questions" ("question_id" uuid not null default uuid_generate_v4(), "step_id" uuid not null, "question_index" int not null, "question_label" text not null, constraint "questions_pkey" primary key ("question_id"));');

    this.addSql('create table "steps" ("step_id" uuid not null default uuid_generate_v4(), "step_title" text not null, "step_index" int not null, constraint "steps_pkey" primary key ("step_id"));');

    this.addSql('create table "survey_results" ("survey_result_id" uuid not null default uuid_generate_v4(), "user_id" uuid not null, "created_at" timestamptz(6) not null default now(), constraint "survey_results_pkey" primary key ("survey_result_id"));');

    this.addSql('create table "user" ("id" uuid not null default uuid_generate_v4(), "createdAt" timestamptz(6) not null default now(), "gender" text null, "birthYear" text null, "degree" text null, "workSituation" text null, constraint "user_pkey" primary key ("id"));');
  }

}
