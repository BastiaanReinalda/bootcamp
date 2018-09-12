import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Poll } from './poll.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateService {
  
  constructor(
    @InjectRepository(Poll)
    private readonly pollRepository: Repository<Poll>,
  ) {}

  create(poll: Poll) {
    this.pollRepository.save(poll);
  }

  async findByLinkString(LinkString: string): Promise<Poll> {
    return await this.pollRepository.findOne({linkString: LinkString});
  }
}
