import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Phone } from './phone.entity';
import { Address } from './address.entity';
import { Email } from './email.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;

  @OneToMany(() => Phone, (phone) => phone.contact)
  phones: Phone[];

  @OneToMany(() => Address, (address) => address.contact)
  addresses: Address[];

  @OneToMany(() => Email, (email) => email.contact)
  emails: Email[];
}
