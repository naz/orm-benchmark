import { Module } from '@nestjs/common';
import { ContactsPrismaService } from './contacts.prisma.service';
import { ContactsPrismaController } from './contacts.prisma.controller';
import { PrismaService } from './prisma.service';

@Module({
  providers: [ContactsPrismaService, PrismaService],
  controllers: [ContactsPrismaController],
})
export class ContactsPrismaModule {}
