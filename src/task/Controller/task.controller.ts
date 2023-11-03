import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TaskDto } from 'src/task/Dto/task.dto';
import { TaskService } from 'src/task/Service/task.service';
import { Taskschema as Task } from 'src/task/Entities/task.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('Task')
export class TaskController {
  private readonly Taskervice: TaskService;

  constructor(Taskervice: TaskService) {
    this.Taskervice = Taskervice;
  }
  @UseGuards(AuthGuard)
  @Get()
  async getAllTask() {
    return await this.Taskervice.getAll();
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  async getTask(@Param('id') id: any): Promise<Task> {
    return await this.Taskervice.getTask(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async createTask(@Body() TaskDto: TaskDto): Promise<Task> {
    return await this.Taskervice.create(TaskDto);
  }
  @UseGuards(AuthGuard)
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() taskDto: TaskDto) {
    return await this.Taskervice.update(parseInt(id), taskDto);
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.Taskervice.delete(parseInt(id));
  }
}
