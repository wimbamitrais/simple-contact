import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactModule } from './contact/contact.module';
import { dataContact, getMockDb } from './app.mockdata';

@Module({
  imports: [
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    const db = getMockDb();
    db.defaults({
      contacts: dataContact,
    }).write();
  }
}
