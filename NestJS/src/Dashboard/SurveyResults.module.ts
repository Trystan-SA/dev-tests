import { Module } from "@nestjs/common";
import { SurveyResultsService } from "./SurveyResults.service";
import { SurveyResultsController } from "./SurveyResults.controller";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import { SurveyResults } from "src/entities/SurveyResults";


@Module({
    imports: [MikroOrmModule.forFeature([SurveyResults])],
    providers: [SurveyResultsService],
    controllers: [SurveyResultsController]
})
export class SurveyResultsModule {}