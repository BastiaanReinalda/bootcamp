import { Get, Controller, Post, Param, Body } from '@nestjs/common';
import { PollService } from './poll.service';

@Controller('Poll')
export class PollController {
  constructor(private readonly pollService: PollService) {}

  @Get(':id')
  async findById(@Param('id') id) {
    return this.pollService.findById(id)
  }
}
