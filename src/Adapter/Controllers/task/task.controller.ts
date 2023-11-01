import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from 'src/Application/Dto/task.dto';
import { TaskService } from 'src/Application/services/task/task.service';
import { Task } from 'src/Infrastructure/Schema/task.schema';
@Controller('Task')
export class TaskController {
  private readonly Taskervice: TaskService;

  constructor(Taskervice: TaskService) {
    this.Taskervice = Taskervice;
  }
  @Get()
  async getAllTask() {
    return await this.Taskervice.getAll();
  }
  @Get(':id')
  async getTask(@Param('id') id: any): Promise<Task> {
    return await this.Taskervice.getTask(id);
  }

  @Post()
  async createTask(@Body() TaskDto: TaskDto): Promise<Task> {
    return await this.Taskervice.create(TaskDto);
  }
  @Put()
  updateTask() {}
  @Delete()
  deleteTask() {}
}
