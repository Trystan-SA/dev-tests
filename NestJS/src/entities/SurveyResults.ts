import { Entity, Opt, PrimaryKey, PrimaryKeyProp, Property } from '@mikro-orm/core';

@Entity()
export class SurveyResults {

  [PrimaryKeyProp]?: 'surveyResultId';

  @Property({ columnType: 'uuid' })
  userId!: string;

  @PrimaryKey({ type: 'string', columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  surveyResultId!: string & Opt;

  @Property({ type: 'Date', length: 6, defaultRaw: `now()` })
  createdAt!: Date & Opt;

}
