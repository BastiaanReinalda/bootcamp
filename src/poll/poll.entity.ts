import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Poll {
  
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 7 })
  linkString : string;

  @Column('text')
  question: string;

  @Column('text')
  answerOne: string;

  @Column('text')
  answerTwo: string;

  @Column('text')
  answerThree: string;

  @Column()
  answerOneScore: number;

  @Column()
  answerTwoScore: number;

  @Column()
  answerThreeScore: number;
}
