import { Module } from '@nestjs/common';
import { PollController } from './poll.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './poll.entity';
import { PollService } from './poll.service';

@Module({
  imports: [TypeOrmModule.forFeature([Poll])],
  controllers: [PollController],
  providers: [PollService],
})
export class PollModule {}