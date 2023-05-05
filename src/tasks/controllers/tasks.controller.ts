import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from '../services/tasks.service';
import { TaskDTO } from '../dto/task.dto';
import { PaginationQueryDTO } from '../dto/pagination.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Query() pagination: PaginationQueryDTO) {
    return this.tasksService.findAll(pagination);
  }

  @Post()
  addTask(@Body() body: TaskDTO) {
    return this.tasksService.addTask(body);
  }

  @Get(':id')
  getTaskById(@Param('id') id: number) {
    return this.tasksService.findById(+id);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() body: TaskDTO) {
    return this.tasksService.updateTask(+id, body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.tasksService.deleteTask(+id);
  }
}
