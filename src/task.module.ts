import { Module } from '@nestjs/common';
import { TaskController } from './Adapter/Controllers/task/task.controller';
import { TaskService } from './Application/services/task/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Taskschema } from './Infrastructure/Schema/task.schema';
@Module({
  imports: [TypeOrmModule.forFeature([Taskschema])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
