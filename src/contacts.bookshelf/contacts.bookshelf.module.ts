import { Module } from '@nestjs/common';
import { ContactsBookshelfController } from './contacts.bookshelf.controller';
import { ContactsBookshelfService } from './contacts.bookshelf.service';

@Module({
  providers: [ContactsBookshelfService],
  controllers: [ContactsBookshelfController],
})
export class ContactsBookshelfModule {}
