import { Entity, Opt, PrimaryKey, PrimaryKeyProp, Property } from '@mikro-orm/core';

@Entity()
export class Answers {

  [PrimaryKeyProp]?: 'answerId';

  @PrimaryKey({ type: 'string', columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  answerId!: string & Opt;

  @Property()
  answer!: number;

  @Property({ columnType: 'text' })
  answerLabel!: string;

  @Property({ type: 'Date', length: 6, defaultRaw: `now()` })
  createdAt!: Date & Opt;

}
