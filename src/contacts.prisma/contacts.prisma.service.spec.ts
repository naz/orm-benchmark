import { Test, TestingModule } from '@nestjs/testing';
import { ContactsPrismaService } from './contacts.prisma.service';

describe('ContactsPrismaService', () => {
  let service: ContactsPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactsPrismaService],
    }).compile();

    service = module.get<ContactsPrismaService>(ContactsPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
