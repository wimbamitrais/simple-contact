import { Get, Req, Controller, Logger, Post, Put, Param, Delete, Body } from '@nestjs/common';
import {
  ApiUseTags,
  ApiOperation,
} from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { Contact } from './contact.entity';

@Controller('contact')
@ApiUseTags('Contact')
export class ContactController {
  constructor( private readonly contactService: ContactService) {
  }

  @Get('/')
  @ApiOperation({ title: 'Get all contacts', description: 'Get all contact as a list' })
  async getAllContact(
    @Req() request: any,
  ): Promise<Contact[]> {
    try {
      Logger.log(`Get all contacts`);
      return this.contactService.getAllContact();
    } catch (error) {
      throw error;
    }
  }

  @Get('/:contactId')
  @ApiOperation({ title: 'Get a contact', description: 'Get a contact with specific id' })
  async getContact(
    @Req() request: any,
    @Param('contactId') contactId: number,
  ): Promise<Contact> {
    try {
      Logger.log(`Get a contact with id ${contactId}`);
      return this.contactService.getContact(contactId);
    } catch (error) {
      throw error;
    }
  }

  @Post('/')
  @ApiOperation({ title: 'Create contact', description: 'Save a contact' })
  async createContact(
    @Req() request: any,
    @Body() contact: Contact,
  ): Promise<Contact> {
    try {
      Logger.log(`Create contact with id ${contact.id}`);
      return this.contactService.createContact(contact);
    } catch (error) {
      throw error;
    }
  }

  @Put('/:contactId')
  @ApiOperation({ title: 'Updata contact', description: 'Update a contact with specific id' })
  async updateContact(
    @Req() request: any,
    @Param('contactId') contactId: number,
    @Body() contact: Contact,
  ): Promise<Contact> {
    try {
      Logger.log(`Update contact with id ${contactId}`);
      return this.contactService.updateContact(contactId, contact);
    } catch (error) {
      throw error;
    }
  }

  @Delete('/:contactId')
  @ApiOperation({ title: 'Delete contact', description: 'Delete a contact with specific id' })
  async deleteContact(
    @Req() request: any,
    @Param('contactId') contactId: number,
  ): Promise<Contact> {
    try {
      Logger.log(`Delete contact with id ${contactId}`);
      return this.contactService.deleteContact(contactId);
    } catch (error) {
      throw error;
    }
  }
}
