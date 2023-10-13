// import { DataSource } from 'typeorm';
import Knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Bookshelf = require('bookshelf');

export const databaseProviders = [
  // {
  //   provide: 'TYPE_ORM_DATA_SOURCE',
  //   useFactory: async () => {
  //     const dataSource = new DataSource({
  //       type: 'mysql',
  //       host: '127.0.0.1',
  //       port: 3306,
  //       username: 'root',
  //       password: '',
  //       database: 'orm_test',
  //       entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  //       synchronize: true,
  //     });

  //     return dataSource.initialize();
  //   },
  // },
  {
    provide: 'KNEX_CONNECTION',
    useFactory: async () => {
      const knex = Knex({
        client: 'mysql2',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          port: 3306,
          user: 'root',
          password: '',
          database: 'orm_test',
        },
      });

      return knex;
    },
  },
  {
    provide: 'BOOKSHELF_DATA_SOURCE',
    useFactory: async () => {
      const knex = Knex({
        client: 'mysql2',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          port: 3306,
          user: 'root',
          password: '',
          database: 'orm_test',
        },
      });

      const bookshelf = Bookshelf(knex);
      const Phone = bookshelf.model('Phone', {
        tableName: 'phone',
      });

      const Email = bookshelf.model('Email', {
        tableName: 'email',
      });

      const Address = bookshelf.model('Address', {
        tableName: 'address',
      });

      const Contact = bookshelf.model('Contact', {
        tableName: 'contact',
        emails() {
          return this.hasMany(Email);
        },
        phones() {
          return this.hasMany(Phone);
        },
        addresses() {
          return this.hasMany(Address);
        },
      });

      return Contact;
    },
  },
];
