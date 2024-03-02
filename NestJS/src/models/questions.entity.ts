import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Questions { 
    @Column('uuid')
    step_id: UUID; 
    
    @Column('text')
    step_title: string;
    
    @Column('integer')
    step_index: number;

    @PrimaryGeneratedColumn('uuid')
    question_id: UUID; 
    
    @Column('integer')
    question_index: number;
    
    @Column('text')
    question_label: string
}