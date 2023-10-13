import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class ContactsBookshelfService {
  constructor(
    @Inject('BOOKSHELF_DATA_SOURCE') private readonly bookshelf: any,
  ) {}

  async findAll() {
    const contacts = await this.bookshelf.forge().fetchAll({
      withRelated: ['emails', 'phones', 'addresses'],
    });

    return contacts;
  }
}
