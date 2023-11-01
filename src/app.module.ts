import { Module } from '@nestjs/common';
import { TaskController } from './Adapter/Controllers/task/task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './Application/services/task/task.service';
import { TaskRepository } from './Infrastructure/Repository/TaskRepository';
import { Task, Taskchema } from './Infrastructure/Schema/Task.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/libary'),
    MongooseModule.forFeature([{ name: Task.name, schema: Taskchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class AppModule {}
