import { Module } from '@nestjs/common';
import { TaskController } from './Adapter/Controllers/task/task.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './Application/services/task/task.service';
import { TaskRepository } from './Infrastructure/Repository/taskRepository';
import { Task, Taskchema } from './Infrastructure/Schema/task.schema';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'),
    MongooseModule.forFeature([{ name: Task.name, schema: Taskchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class AppModule {}
