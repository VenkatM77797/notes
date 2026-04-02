import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'; 

interface updatePayload{
  id: number;
  title: string;
  content: string;
}

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  create(title: string, content: string) {
    return this.prisma.note.create({
      data: { title, content },
    });
  }

  update(id: number, title: string, content: string) {
    return this.prisma.note.update({
      where: { id },
      data: { title, content },
    });
  }

  findAll() {
    return this.prisma.note.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  delete(id: number) {
    return this.prisma.note.delete({
      where: { id },
    });
  }
}