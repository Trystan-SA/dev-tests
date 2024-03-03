import { Entity, Opt, PrimaryKey, PrimaryKeyProp, Property } from '@mikro-orm/core';

@Entity()
export class Questions {

  [PrimaryKeyProp]?: 'questionId';

  @Property({ columnType: 'uuid' })
  stepId!: string;

  @PrimaryKey({ type: 'string', columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  questionId!: string & Opt;

  @Property()
  questionIndex!: number;

  @Property({ columnType: 'text' })
  questionLabel!: string;

}
