import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Migrations {

  @PrimaryKey()
  id!: number;

  @Property()
  timestamp!: bigint;

  @Property()
  name!: string;

}
