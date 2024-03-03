import { Entity, Index, Opt, PrimaryKey, PrimaryKeyProp, Property } from '@mikro-orm/core';

@Entity()
export class QuestionResults {

  [PrimaryKeyProp]?: 'questionResultId';

  @Index({ name: 'IDX_6f2599c17872e10e09f5207db4' })
  @Property({ columnType: 'uuid' })
  questionId!: string;

  @PrimaryKey({ type: 'string', columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  questionResultId!: string & Opt;

  @Index({ name: 'IDX_ed5140c720bf7c1dbe42e15174' })
  @Property({ columnType: 'uuid' })
  answerId!: string;

  @Index({ name: 'IDX_087abaa409f340c373e96cc0f1' })
  @Property({ columnType: 'uuid' })
  surveyResultId!: string;

  @Property({ type: 'string', columnType: 'date', defaultRaw: `now()` })
  createdAt!: string & Opt;

}
