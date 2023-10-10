import { Controller, Get } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  findAll(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }
}
