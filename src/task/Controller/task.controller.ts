import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskDto } from 'src/task/Dto/task.dto';
import { TaskService } from 'src/task/Service/task.service';
import { Taskschema as Task } from 'src/task/Entities/task.entity';

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
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() taskDto: TaskDto) {
    return await this.Taskervice.update(parseInt(id), taskDto);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.Taskervice.delete(parseInt(id));
  }
}
