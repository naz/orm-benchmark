import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Contact } from '../../contacts/contact.entity';
import { Email } from '../../contacts/email.entity';
import { Phone } from '../../contacts/phone.entity';
import { Address } from '../../contacts/address.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const contacts = await factory(Contact)().createMany(1000);

    for (const contact of contacts) {
      await factory(Phone)()
        .map(async (phone) => {
          phone.contact = contact;
          return phone;
        })
        .createMany(2);

      await factory(Email)()
        .map(async (email) => {
          email.contact = contact;
          return email;
        })
        .createMany(2);

      await factory(Address)()
        .map(async (address) => {
          address.contact = contact;
          return address;
        })
        .createMany(2);
    }
  }
}
