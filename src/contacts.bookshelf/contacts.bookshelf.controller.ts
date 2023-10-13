import { Controller, Get } from '@nestjs/common';
import { ContactsBookshelfService } from './contacts.bookshelf.service';

@Controller('contacts.bookshelf')
export class ContactsBookshelfController {
  constructor(private readonly contactsService: ContactsBookshelfService) {}

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }
}
