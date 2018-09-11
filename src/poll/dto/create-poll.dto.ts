import { ApiModelProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { randomstring } from "randomstring";
import { Poll } from "../interfaces/poll.interface";

export class CreatePollDto {
  @ApiModelProperty({
    example: 'What year was I born?',
    description: 'The subject of the poll'
  })
  @IsString() readonly question: string;

  @ApiModelProperty({
    example: '1993',
    description: 'An answer to the poll question'
  })
  @IsString() readonly answerOne: string;

  @ApiModelProperty({
    example: '1994',
    description: 'An answer to the poll question'
  })
  @IsString() readonly answerTwo: string;

  @ApiModelProperty({
    example: '1995',
    description: 'An answer to the poll question'
  })
  @IsString() readonly answerThree: string;

  public toPoll() : Poll{
    const poll = new Poll();
    poll.id = randomstring.generate(7);
    poll.question = this.question;
    poll.answerOne = this.answerOne;
    poll.answerTwo = this.answerTwo;
    poll.answerThree = this.answerThree;
    return poll;
  }

}