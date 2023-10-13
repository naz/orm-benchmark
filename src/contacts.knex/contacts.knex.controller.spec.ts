import { Test, TestingModule } from '@nestjs/testing';
import { ContactsKnexController } from './contacts.knex.controller';

describe('ContactsKnexController', () => {
  let controller: ContactsKnexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsKnexController],
    }).compile();

    controller = module.get<ContactsKnexController>(ContactsKnexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
