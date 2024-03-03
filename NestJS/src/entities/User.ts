import { Entity, Opt, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class User {

  @PrimaryKey({ type: 'string', columnType: 'uuid', defaultRaw: `uuid_generate_v4()` })
  id!: string & Opt;

  @Property({ fieldName: 'createdAt', type: 'Date', length: 6, defaultRaw: `now()` })
  createdAt!: Date & Opt;

  @Property({ columnType: 'text', nullable: true })
  gender?: string;

  @Property({ fieldName: 'birthYear', columnType: 'text', nullable: true })
  birthYear?: string;

  @Property({ columnType: 'text', nullable: true })
  degree?: string;

  @Property({ fieldName: 'workSituation', columnType: 'text', nullable: true })
  workSituation?: string;

}
