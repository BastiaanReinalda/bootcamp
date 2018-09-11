import { Injectable } from '@nestjs/common';
import { Poll } from '../interfaces/poll.interface';

@Injectable()
export class CreateService {
  private readonly polls: Poll[] = [];

  create(poll: Poll) {
    this.polls.push(poll);
  }

  findOne({id: Id})  {
    return this.polls;
  }
}
