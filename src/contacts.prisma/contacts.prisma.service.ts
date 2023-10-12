import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Contact, Prisma } from '@prisma/client';

@Injectable()
export class ContactsPrismaService {
  constructor(private prisma: PrismaService) {}

  async contacts(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ContactWhereUniqueInput;
    where?: Prisma.ContactWhereInput;
    orderBy?: Prisma.ContactOrderByWithAggregationInput;
  }): Promise<Contact[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.contact.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        phones: true,
        addresses: true,
        emails: true,
      },
    });
  }
}
