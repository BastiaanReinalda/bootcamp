import { Module } from '@nestjs/common';
import { PollModule } from 'poll/poll.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [PollModule, TypeOrmModule.forRoot() ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}