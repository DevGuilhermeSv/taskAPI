import { Injectable } from '@nestjs/common';
import { TaskDto } from 'src/Application/Dto/task.dto';
import { TaskRepository } from 'src/Infrastructure/Repository/taskRepository';
import { instanceToInstance, plainToInstance } from 'class-transformer';
import { Task } from 'src/Infrastructure/Schema/task.schema';

@Injectable()
export class TaskService {
  constructor(private readonly TaskRepository: TaskRepository) {}
  async getAll() {
    return await this.TaskRepository.getAll();
  }
  async getTask(id: any): Promise<Task> {
    return await this.TaskRepository.getTask(id);
  }

  async update(id: any, data: TaskDto): Promise<Task> {
    const Task = this.transform(data);
    return await this.TaskRepository.update(id, Task);
  }
  async create(data: TaskDto): Promise<Task> {
    const Task = this.transform(data);
    return await this.TaskRepository.create(Task);
  }

  delete(): void {
    throw new Error('Method not implemented.');
  }
  private transform(TaskDto: TaskDto): Task {
    const task = new Task();
    task.title = TaskDto.title;
    task.description = TaskDto.description;
    task.status = TaskDto.status;
    return task;
  }
}
