import { Test, TestingModule } from '@nestjs/testing';
import { ContactsPrismaController } from './contacts.prisma.controller';

describe('ContactsPrismaController', () => {
  let controller: ContactsPrismaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsPrismaController],
    }).compile();

    controller = module.get<ContactsPrismaController>(ContactsPrismaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
