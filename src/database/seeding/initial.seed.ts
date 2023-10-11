// @/src/db/seeding/seeds/initialSeed.ts
import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Contact } from '../../contacts/contact.entity';
import { Email } from '../../contacts/email.entity';
import { Phone } from '../../contacts/phone.entity';
import { Address } from '../../contacts/address.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const contacts = await factory(Contact)().createMany(1000);

    await factory(Phone)()
      .map(async (phone) => {
        phone.contact = contacts[Math.floor(Math.random() * contacts.length)];
        return phone;
      })
      .createMany(2000);

    await factory(Email)()
      .map(async (email) => {
        email.contact = contacts[Math.floor(Math.random() * contacts.length)];
        return email;
      })
      .createMany(2000);

    await factory(Address)()
      .map(async (address) => {
        address.contact = contacts[Math.floor(Math.random() * contacts.length)];
        return address;
      })
      .createMany(2000);
  }
}
