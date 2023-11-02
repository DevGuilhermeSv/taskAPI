import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task.module';
import { Taskschema } from './Infrastructure/Schema/task.schema';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'example',
      database: 'task',
      entities: [Taskschema],
      migrations: ['./src/Infrastructure/Migrations'],
      synchronize: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
