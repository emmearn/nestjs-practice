import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    // tasksService: TasksService;

    constructor(private tasksService: TasksService) { // syntactic sugar
        // this.tasksService = tasksService;
    }

    @Get()
    getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
        if (Object.keys(filterDto).length) {
            return this.tasksService.getTasksWithFilter(filterDto);
        }
        
        return this.tasksService.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete('/:id')
    deletetask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body() updateTaskStatusDto: UpdateTaskStatusDto): Task {
        const { status } = updateTaskStatusDto;
        return this.tasksService.updateTaskStatus(id, status);
    }
}