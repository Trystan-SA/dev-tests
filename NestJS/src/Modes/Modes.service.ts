import { EntityManager } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";


interface ModesScore {
    mode: string;
    mode_score: number;
}


@Injectable()
export class ModesService {
    constructor(
        private readonly em: EntityManager
    ){}

    /** Get Modes global statistics */
    async ModesStats(): Promise<any> {
        // TODO - IMPLEMENT A PROPER CACHE SYSTEM (REDIS, MEMCACHED, ETC.)

        const query = this.em.createQueryBuilder('Modes', 'm')
        query.select('scores')
        let result = await query.execute('all')

        let ComputedStatistics = {};
        result.forEach((mode: any) => {
            let ModesScores: ModesScore[] = JSON.parse(mode.scores)

            ModesScores.forEach((modeScore: ModesScore) => {
                if(!ComputedStatistics[modeScore.mode]) {
                    ComputedStatistics[modeScore.mode] = [];
                }

                ComputedStatistics[modeScore.mode].push(modeScore.mode_score)
            })
        })

        // Regroup and count duplicated values for each mode
        let DuplicatedScoresStatistics = {};
        Object.keys(ComputedStatistics).forEach((mode: string)=>{
            let scoreCount = {};
            ComputedStatistics[mode].forEach((score) => {
                scoreCount[score] = (scoreCount[score] || 0) + 1;
            })

            
            let duplicated = Object.entries(scoreCount).reduce((acc, [score, count]) => {
                //@ts-ignore
                if(count > 1){
                    acc[score] = count;
                }
                return acc;
            }, {})

            if(Object.keys(duplicated).length > 0){
                DuplicatedScoresStatistics[mode] = duplicated;
            }
        })

        return DuplicatedScoresStatistics;
    }
}