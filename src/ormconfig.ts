import { User } from './users/user.entity';
import { Contact } from './contacts/contact.entity';
import { Phone } from './contacts/phone.entity';
import { Address } from './contacts/address.entity';
import { Email } from './contacts/email.entity';

export default {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'orm_test',
  entities: [User, Contact, Phone, Address, Email],
  synchronize: true,
};
