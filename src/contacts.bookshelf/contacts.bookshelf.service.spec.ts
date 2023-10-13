import { Test, TestingModule } from '@nestjs/testing';
import { ContactsBookshelfService } from './contacts.bookshelf.service';

describe('ContactsBookshelfService', () => {
  let service: ContactsBookshelfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsBookshelfService],
    }).compile();

    service = module.get<ContactsBookshelfService>(ContactsBookshelfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
