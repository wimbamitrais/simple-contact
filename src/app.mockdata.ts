import { Contact } from './contact/contact.entity';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('mockdb.json');
const db = low(adapter);

const dataContact: Contact[] = [
  {
    id: '1',
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    age: 33,
    address: 'Jakarta',
  },
  {
    id: '2',
    firstname: 'David',
    lastname: 'Beckahm',
    age: 37,
    address: 'Yogyakarta',
  },
  {
    id: '3',
    firstname: 'Didier',
    lastname: 'Drogba',
    age: 40,
    address: 'Bandung',
  },
]

function getMockDb() {
  return db;
}

export {
  dataContact,
  getMockDb,
};
