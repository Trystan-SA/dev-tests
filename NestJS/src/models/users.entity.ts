import { UUID } from 'crypto';
import { SurveyResults } from './surveyResults.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


type gender = 'woman' | 'man' | null


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: UUID

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column('text', {nullable: true})
    gender: gender

    @Column('integer', {nullable: true})
    birthYear: number

    @Column('text', {nullable: true})
    degree: string

    @Column('text', {nullable: true})
    workSituation: string
}