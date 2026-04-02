import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post()
  create(
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.notesService.create(title, content);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return this.notesService.update(Number(id), title, content);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.notesService.delete(Number(id));
  }
}