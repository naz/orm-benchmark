import { Injectable, Inject } from '@nestjs/common';
import { Knex } from 'knex';
import * as _ from 'lodash';

@Injectable()
export class ContactsKnexService {
  constructor(@Inject('KNEX_CONNECTION') private readonly knex: Knex) {}

  async findAll() {
    const contacts = await this.knex
      .table('contact')
      .leftJoin('address', 'contact.id', 'address.contact_id')
      .leftJoin('phone', 'contact.id', 'phone.contact_id')
      .leftJoin('email', 'contact.id', 'email.contact_id')
      // yeah a little MySQL hack but wanted to have an easier data structure to work with
      .options({ nestTables: true })
      .then((data) => {
        // - Wait! What is this?!
        // - Glad you asked. This an attempt keeping the data format consistent between
        //   all GET /contacts* endpoints. Otherwise would be too unrealistic of a comparison.
        return _.chain(data)
          .groupBy(function (contact) {
            return contact.contact.id;
          })
          .map(function (contacts) {
            const contact = _.chain(contacts)
              .first()
              .pick('contact')
              .value().contact;

            const contactPhones = _.map(contacts, function (row) {
              return row.phone;
            });
            contact.phones = _.uniqBy(contactPhones, 'id');

            const contactAddresses = _.map(contacts, function (row) {
              return row.address;
            });
            contact.addresses = _.uniqBy(contactAddresses, 'id');

            const contactEmails = _.map(contacts, function (row) {
              return row.email;
            });
            contact.emails = _.uniqBy(contactEmails, 'id');

            return contact;
          })
          .value();
      });

    return contacts;
  }
}
