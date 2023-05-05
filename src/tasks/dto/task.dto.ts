import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TaskDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}
