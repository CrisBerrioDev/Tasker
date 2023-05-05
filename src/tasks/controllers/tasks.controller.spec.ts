import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from '../services/tasks.service';

describe('TasksController', () => {
  let controller: TasksController;

  const mockTaskService = {
    findAll: jest.fn(() => true),
    addTask: jest.fn(() => true),
    findById: jest.fn(() => true),
    updateTask: jest.fn(() => true),
    deleteTask: jest.fn(() => true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    })
      .overrideProvider(TasksService)
      .useValue(mockTaskService)
      .compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all tasks', () => {
    const result = controller.getTasks({ limit: undefined, offset: undefined });
    expect(result).toBe(true);
  });
});
