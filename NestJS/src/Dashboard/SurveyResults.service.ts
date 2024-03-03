import { EntityManager, MikroORM } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { SurveyResults } from "src/entities/SurveyResults";

@Injectable()
export class SurveyResultsService {
    constructor(
        //private readonly orm: MikroORM,
        private readonly em: EntityManager
    ){}

    
    /** Get numbers of filled survey */
    async CountSurveys(): Promise<number> {
        const query = this.em.createQueryBuilder(SurveyResults, 's').count()
        return query.execute('get');
    }
}