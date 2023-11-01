import { Injectable } from '@nestjs/common';
import Repository from './Repository';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Query, Schema } from 'mongoose';
import { TaskDto } from 'src/Application/Dto/Task.dto';
import { Task } from '../Schema/Task.schema';
@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(@InjectModel(Task.name) private readonly TaskModel: Model<Task>) {
    super(TaskModel);
  }
  getTask(id: any): Promise<Task> {
    return this.TaskModel.findById(id).exec();
  }
  updateTask(id: any, item: TaskDto) {
    return this.TaskModel.findByIdAndUpdate(id, item);
  }
}
