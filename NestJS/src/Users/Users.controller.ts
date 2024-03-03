import { Body, Controller, Get, Param } from "@nestjs/common";
import { GetUserInformationDTO, UsersService } from "./Users.service";
import { User } from "src/entities/User";



@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ){}

    // api/users/find-by-id/{:id}
    @Get('/find-by-id/:id')
    async GetUsersById(@Param('id') id: string): Promise<any> {
        return await this.usersService.GetUserById(id);
    }

    // api/users/list
    @Get('list')
    async findAllUsers(): Promise<User[]> {
        return await this.usersService.FindAllUsers();
    }
}


