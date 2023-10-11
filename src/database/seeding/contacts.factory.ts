import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Contact } from '../../contacts/contact.entity';
import { Phone } from '../../contacts/phone.entity';
import { Address } from '../../contacts/address.entity';
import { Email } from '../../contacts/email.entity';

define(Phone, (faker: typeof Faker) => {
  const phone = new Phone();
  phone.number = faker.phone.phoneNumber();
  return phone;
});

define(Address, (faker: typeof Faker) => {
  const address = new Address();
  address.description = faker.address.streetAddress();
  return address;
});

define(Email, (faker: typeof Faker) => {
  const email = new Email();
  email.account = faker.internet.exampleEmail();
  return email;
});

define(Contact, (faker: typeof Faker) => {
  const contact = new Contact();
  contact.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  return contact;
});
