import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common'
import { User } from 'src/entities/User';
import { UsersService } from './Users.service';
import { UsersController } from './Users.controller';


@Module({
    imports: [MikroOrmModule.forFeature([User])],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}