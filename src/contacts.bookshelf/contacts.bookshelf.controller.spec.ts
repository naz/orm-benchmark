import { Test, TestingModule } from '@nestjs/testing';
import { ContactsBookshelfController } from './contacts.bookshelf.controller';

describe('ContactsBookshelfController', () => {
  let controller: ContactsBookshelfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsBookshelfController],
    }).compile();

    controller = module.get<ContactsBookshelfController>(ContactsBookshelfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
