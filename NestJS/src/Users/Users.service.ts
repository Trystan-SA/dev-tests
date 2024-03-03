import { EntityManager } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { User } from "src/entities/User";

@Injectable()
export class UsersService {
    constructor(
        private readonly em: EntityManager
    ) {}

    async GetUsersInformation(GetUserInfoDTO: GetUserInformationDTO): Promise<any> {
        const query = this.em.createQueryBuilder(User, 'u')
        query.limit(25) //GetUserInfoDTO.itemsPerPage)
        query.offset(0) //GetUserInfoDTO.pagination * GetUserInfoDTO.itemsPerPage)
        query.orderBy({createdAt: 'ASC'})
        return query.getResult();
    }


    async GetUserById(id: string): Promise<any> {
        console.log(id)
        const query = this.em.createQueryBuilder(User, 'u')
        query.select('*')
        query.where({id: id})
        query.limit(1)

        // TODO - Relationship with other tables

        let result = await query.getResult();
        return result;
    }


    async FindAllUsers(): Promise<User[]> {
        const query = this.em.createQueryBuilder(User, 'u')
        query.select('*');
        query.limit(25);
        return query.getResult();
    }
}


export class GetUserInformationDTO {
    pagination ?: number = 0
    itemsPerPage ?: number = 25
}