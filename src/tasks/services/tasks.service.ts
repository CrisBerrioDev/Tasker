import { Injectable } from '@nestjs/common';
import { TaskDTO } from '../dto/task.dto';
import { TaskEntity } from '../entities/task.entity';
import { PaginationQueryDTO } from '../dto/pagination.dto';

@Injectable()
export class TasksService {
  private tasksList: TaskEntity[] = [
    {
      id: 1,
      title: 'Task Title',
      description: 'Task Description',
      completed: false,
    },
  ];

  public findAll(pagination: PaginationQueryDTO) {
    let end = undefined;
    if (pagination.limit && pagination.offset) {
      console.log('ITS HERE');

      end = +pagination.offset + +pagination.limit;
      console.log(`End value: ${end}`);
    }
    const paginatedTaskList = this.tasksList.slice(pagination.offset, end);
    return paginatedTaskList;
  }

  public addTask(body: TaskDTO) {
    const task = {
      id: Math.floor(Math.random() * 1000),
      ...body,
    };
    this.tasksList.push(task);
    return task;
  }

  public findById(id: number) {
    const task = this.tasksList.find((task) => task.id === id);
    return task;
  }

  public updateTask(id, body) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    console.log(index);
    this.tasksList[index] = { id, ...body };
    return this.tasksList;
  }

  public deleteTask(id) {
    const index = this.tasksList.findIndex((task) => task.id === id);
    this.tasksList.splice(index, 1);
    return this.tasksList;
  }
}
