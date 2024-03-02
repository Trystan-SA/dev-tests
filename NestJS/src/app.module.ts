import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './User/users.module';


@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        UsersModule,
        TypeOrmModule.forRoot({
            autoLoadEntities: true,
            type: 'postgres',
            host: process.env.POSTGRES_HOST || 'localhost',
            port: parseInt(process.env.POSTGRES_PORT) || 5432,
            username: process.env.POSTGRES_USER || 'root',
            password: process.env.POSTGRES_PASSWORD || 'pass',
            database: process.env.POSTGRES_DB || 'devtest',
            synchronize: process.env.ENV === 'dev' ? true : false,
            entities: []
        })
    ]
})
export class AppModule {}
