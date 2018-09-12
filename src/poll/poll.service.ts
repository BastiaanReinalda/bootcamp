import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Poll } from './poll.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PollService {
  
  constructor(
    @InjectRepository(Poll)
    private readonly pollRepository: Repository<Poll>,
  ) {}

  async findById(Id: number): Promise<Poll> {
    return await this.pollRepository.findOne({id: Id});
  }
}
