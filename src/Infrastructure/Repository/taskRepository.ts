import { Injectable } from '@nestjs/common';
import Repository from './Repository';
import { Taskschema } from '../Schema/task.schema';
import { Repository as TypeRep } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskRepository extends Repository<Taskschema> {
  constructor(
    @InjectRepository(Taskschema)
    private taskRepository: TypeRep<Taskschema>,
  ) {
    super(taskRepository);
  }
  findByStatus(status: boolean): Promise<Taskschema[]> {
    return this.repository.find({ where: { status } });
  }
  findByName(title: string) {
    return this.repository.find({
      where: { title },
    });
  }
}
