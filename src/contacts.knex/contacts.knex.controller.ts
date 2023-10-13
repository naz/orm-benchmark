import { Controller, Get } from '@nestjs/common';
import { ContactsKnexService } from './contacts.knex.service';

@Controller('contacts.knex')
export class ContactsKnexController {
  constructor(private readonly contactsService: ContactsKnexService) {}

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }
}
