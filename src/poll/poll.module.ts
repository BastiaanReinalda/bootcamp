import { Module } from '@nestjs/common';
import { CreateController } from './create.controller';
import { PollController } from './poll.controller';
import { CreateService } from './create.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './poll.entity';
import { PollService } from './poll.service';

@Module({
  imports: [TypeOrmModule.forFeature([Poll])],
  controllers: [CreateController, PollController],
  providers: [CreateService, PollService],
})
export class PollModule {}