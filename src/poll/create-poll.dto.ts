import { ApiModelProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

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
}