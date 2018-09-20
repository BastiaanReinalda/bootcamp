import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdatePollDto {
    @ApiModelProperty({
        example: 'Wsdaf6a',
        description: 'The link param for the poll',
    })
    @IsString() readonly linkString: string;

    @ApiModelProperty({
        example: 'What year was I born?',
        description: 'The subject of the poll',
    })
    @IsString() readonly question: string;

    @ApiModelProperty({
        example: '1993',
        description: 'An answer to the poll question',
    })
    @IsString() readonly answerOne: string;

    @ApiModelProperty({
        example: '1994',
        description: 'An answer to the poll question',
    })
    @IsString() readonly answerTwo: string;

    @ApiModelProperty({
        example: '1995',
        description: 'An answer to the poll question',
    })
    @IsString() readonly answerThree: string;

    @ApiModelProperty({
        example: 1,
        description: 'An answer to the poll question',
    })
    @IsString() readonly answerOneScore: number;

    @ApiModelProperty({
        example: 1,
        description: 'An answer to the poll question',
    })
    @IsString() readonly answerTwoScore: number;

    @ApiModelProperty({
        example: 1,
        description: 'An answer to the poll question',
    })
    @IsString() readonly answerThreeScore: number;
}