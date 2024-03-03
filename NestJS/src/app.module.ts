import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SurveyResultsModule } from './Dashboard/SurveyResults.module';
import { UsersModule } from './Users/Users.module';
import { ModesModule } from './Modes/Modes.module';


@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        MikroOrmModule.forRoot({
            entities: ['./dist/entities'],
            entitiesTs: ['./src/entities'],
            dbName: 'devtest',
            driver: PostgreSqlDriver,
            user: 'root',
            password: 'pass',
            host: 'postgres',
            port: 5432,
        }),
        
        SurveyResultsModule,
        UsersModule,
        ModesModule
    ]
})
export class AppModule {}
