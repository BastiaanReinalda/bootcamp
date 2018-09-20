import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Poll } from './poll.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PollService {

  constructor(
    @InjectRepository(Poll)
    private readonly pollRepository: Repository<Poll>,
  ) { }

  async create(poll: Poll) {
    await this.pollRepository.save(poll);
  }

  async findByLinkString(LinkString: string): Promise<Poll> {
    return await this.pollRepository.findOne({ linkString: LinkString });
  }
}
