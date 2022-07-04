import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', // localhost host changed to postgres due minikube config
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-managment',
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule
  ],
})
export class AppModule {}
