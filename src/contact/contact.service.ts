import { Injectable, Logger } from '@nestjs/common';
import { Contact } from './contact.entity';
import { getMockDb } from '../app.mockdata';

@Injectable()
export class ContactService {

  private readonly contactRepository = getMockDb();

  getAllContact(): Promise<Contact[]>  {
    return new Promise((resolve, reject) => {
      resolve(this.contactRepository.get('contacts').value());
    });
  }

  getContact(contactId: number): Promise<Contact>  {
    return new Promise((resolve, reject) => {
      resolve(this.contactRepository.get('contacts').find({id: contactId}).value());
    });
  }

  createContact(contact: Contact): Promise<Contact> {
    return new Promise((resolve, reject) => {
      resolve(this.contactRepository.get('contacts').push(contact).write());
    });
  }

  updateContact(contactId: number, contact: Contact): Promise<Contact> {
    return new Promise((resolve, reject) => {
      resolve(this.contactRepository.get('contacts').find({id: contactId}).assign(contact).write());
    });
  }

  deleteContact(contactId: number): Promise<Contact> {
    return new Promise((resolve, reject) => {
      resolve(this.contactRepository.get('contacts').remove({id: contactId}).write());
    });
  }
}
