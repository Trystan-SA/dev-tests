import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

type modeStr = 'Introspection' | 'Transformation' | 'Impact' | 'Ascension' | 'Équilibre'
type scores = { mode: modeStr; mode_score: number }[]

@Entity()
export class Modes { 
    @PrimaryGeneratedColumn('uuid')
    workoscope_result_id: UUID;

    @Column('uuid')
    survey_result_id: UUID;
    
    @Column('text') // Should be JSONB, but CSV import do not work with JSONB
    scores: scores[];
}