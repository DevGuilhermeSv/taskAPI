import { Module } from '@nestjs/common';
import { TaskController } from './Adapter/Controllers/task/task.controller';
import { TaskService } from './Application/services/task/task.service';
import { TaskRepository } from './Infrastructure/Repository/taskRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taskschema } from './Infrastructure/Schema/task.schema';
@Module({
  imports: [TypeOrmModule.forFeature([Taskschema])],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
