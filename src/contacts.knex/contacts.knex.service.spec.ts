import { Test, TestingModule } from '@nestjs/testing';
import { ContactsKnexService } from './contacts.knex.service';

describe('ContactsKnexService', () => {
  let service: ContactsKnexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsKnexService],
    }).compile();

    service = module.get<ContactsKnexService>(ContactsKnexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
