import { Test, TestingModule } from '@nestjs/testing';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';

describe('ContactsController', () => {
  let controller: ContactsController;
  let contactsService: ContactsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
      providers: [
        ContactsService,
        {
          provide: ContactsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
              {
                name: 'name #1',
                phones: [],
                addresses: [],
                emails: [],
              },
              {
                name: 'name #2',
                phones: [],
                addresses: [],
                emails: [],
              },
            ]),
          },
        },
      ],
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
    contactsService = module.get<ContactsService>(ContactsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => {
    it('should find all users ', () => {
      controller.findAll();
      expect(contactsService.findAll).toHaveBeenCalled();
    });
  });
});
