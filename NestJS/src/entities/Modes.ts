import { Entity, Opt, PrimaryKey, PrimaryKeyProp, Property } from '@mikro-orm/core';

@Entity()
export class Modes {

  [PrimaryKeyProp]?: 'modeId';

  @PrimaryKey({ type: 'string', columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  modeId!: string & Opt;

  @Property({ columnType: 'uuid' })
  surveyResultId!: string;

  @Property({ columnType: 'text' })
  scores!: string;

}
