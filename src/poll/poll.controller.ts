import { Get, Controller, Post, Param, Body, Patch } from '@nestjs/common';
import { PollService } from './poll.service';
import { CreatePollDto } from './create-poll.dto';
import { Poll } from './poll.entity';
import * as randomstring from 'randomstring';
import { UpdatePollDto } from './update-poll.dto';

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

  @Patch()
  async patchByLinkString(@Body() updatePollDto: UpdatePollDto) {
    const poll = new Poll();
    poll.id = updatePollDto.id;
    poll.linkString = updatePollDto.linkString;
    poll.question = updatePollDto.question;
    poll.answerOne = updatePollDto.answerOne;
    poll.answerTwo = updatePollDto.answerTwo;
    poll.answerThree = updatePollDto.answerThree;
    poll.answerOneScore = updatePollDto.answerOneScore;
    poll.answerTwoScore = updatePollDto.answerTwoScore;
    poll.answerThreeScore = updatePollDto.answerThreeScore;
    return this.pollService.updateByLinkString(poll);
  }
}
