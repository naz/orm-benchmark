import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.entity';

const oneContact = {
  name: 'name #1',
  phones: [],
  addresses: [],
  emails: [],
};
const contactsArray = [oneContact];

describe('ContactsService', () => {
  let service: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactsService,
        {
          provide: getRepositoryToken(Contact),
          useValue: {
            find: jest.fn().mockResolvedValue(contactsArray),
          },
        },
      ],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
