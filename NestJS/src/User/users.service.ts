import { InjectRepository } from "@nestjs/typeorm";
//import { User } from "./users.entity";
import { Repository } from "typeorm";
import { UUID } from "crypto";
import { Inject, Injectable } from "@nestjs/common";


@Injectable()
export class UsersService {
    /*constructor(
        @Inject('USERS_REPOSITORY')
        private usersRepository: typeof User
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.findAll<User>();
    }

    findOne(id: UUID): Promise<User | null> {
        return this.usersRepository.findOne<User>({ where: { id } });
    }*/
}