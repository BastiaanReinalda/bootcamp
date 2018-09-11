import { Module } from '@nestjs/common';
import { CreateController } from './controllers/create.controller';
import { CreateService } from './services/create.service';

@Module({
  controllers: [CreateController],
  providers: [CreateService],
})
export class PollModule {}