import { Controller, Get } from '@nestjs/common';
import { ContactsPrismaService } from './contacts.prisma.service';
import { Contact } from '@prisma/client';

@Controller('contacts.prisma')
export class ContactsPrismaController {
  constructor(private readonly contactService: ContactsPrismaService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactService.contacts({});
  }
}
