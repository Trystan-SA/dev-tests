import { Entity, Opt, PrimaryKey, PrimaryKeyProp, Property } from '@mikro-orm/core';

@Entity()
export class Steps {

  [PrimaryKeyProp]?: 'stepId';

  @PrimaryKey({ type: 'string', columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  stepId!: string & Opt;

  @Property({ columnType: 'text' })
  stepTitle!: string;

  @Property()
  stepIndex!: number;

}
