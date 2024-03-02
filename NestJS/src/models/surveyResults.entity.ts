import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class SurveyResults {
    @PrimaryGeneratedColumn('uuid')
    surver_result_id: UUID;

    @Column({type: 'uuid'})
    user_id: UUID;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;
}