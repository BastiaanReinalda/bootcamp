import { Get, Controller, Post, Param, Body, Patch } from '@nestjs/common';
import { PollService } from './poll.service';
import { CreatePollDto } from './create-poll.dto';
import { Poll } from './poll.entity';
import * as randomstring from 'randomstring';

@Controller('/Poll')
export class PollController {
  constructor(private readonly pollService: PollService) {}

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    const poll = new Poll();
    poll.linkString = randomstring.generate(7);
    poll.question = createPollDto.question;
    poll.answerOne = createPollDto.answerOne;
    poll.answerTwo = createPollDto.answerTwo;
    poll.answerThree = createPollDto.answerThree;
    poll.answerOneScore = 0;
    poll.answerTwoScore = 0;
    poll.answerThreeScore = 0;
    this.pollService.create(poll);
    return poll;
  }

  @Get(':linkString')
  async findByLinkString(@Param('linkString') linkString: string) {
    return this.pollService.findByLinkString(linkString);
  }
}
