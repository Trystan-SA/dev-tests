import { UUID } from 'crypto';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class QuestionResults { 
    @PrimaryGeneratedColumn('uuid')
    question_result_id: UUID;  

    @Column('uuid')
    @Index()
    question_id: UUID;

    @Column('uuid')
    @Index()
    answer_id: UUID;

    @Column('uuid')
    @Index()
    survey_result_id: UUID;

    @Column('date', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column('integer')
    answer: number;

    @Column('text')
    answer_label: string
}