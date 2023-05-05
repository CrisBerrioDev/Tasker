import { IsNumber, IsOptional } from 'class-validator';

export class PaginationQueryDTO {
  @IsOptional()
  @IsNumber()
  limit: number;

  @IsOptional()
  @IsNumber()
  offset: number;
}
