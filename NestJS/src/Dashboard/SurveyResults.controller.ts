import { Controller, Get } from "@nestjs/common";
import { SurveyResultsService } from "./SurveyResults.service";

@Controller('survey-results')
export class SurveyResultsController {
    constructor(  
        private readonly dashboardService: SurveyResultsService
    ) {}


    // api/survey-results/count
    @Get('count')
    async CountSurveys(): Promise<number> {
        return await this.dashboardService.CountSurveys();
    }
}