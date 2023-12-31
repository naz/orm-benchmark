import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Contact } from './contacts/contact.entity';
import { Phone } from './contacts/phone.entity';
import { Address } from './contacts/address.entity';
import { Email } from './contacts/email.entity';
import { ContactsModule } from './contacts/contacts.module';
import { PrismaService } from './contacts.prisma/prisma.service';
import { ContactsPrismaModule } from './contacts.prisma/contacts.prisma.module';
import { ContactsBookshelfModule } from './contacts.bookshelf/contacts.bookshelf.module';
import { ContactsKnexModule } from './contacts.knex/contacts.knex.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'orm_test',
      entities: [User, Contact, Phone, Address, Email],
      synchronize: true,
    }),
    DatabaseModule,
    UsersModule,
    ContactsModule,
    ContactsPrismaModule,
    ContactsBookshelfModule,
    ContactsKnexModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
