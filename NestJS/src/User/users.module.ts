import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
//import { User } from './users.entity';
import { UsersProviders } from './user.providers';


@Module({
    //imports: [TypeOrmModule.forFeature([User])],
    //providers: [UsersService, ...UsersProviders],
    controllers: [UsersController],
    exports: [TypeOrmModule]
})
export class UsersModule {}