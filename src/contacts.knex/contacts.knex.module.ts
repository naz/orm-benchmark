import { Module } from '@nestjs/common';
import { ContactsKnexService } from './contacts.knex.service';
import { ContactsKnexController } from './contacts.knex.controller';

@Module({
  providers: [ContactsKnexService],
  controllers: [ContactsKnexController],
})
export class ContactsKnexModule {}
