import { PredictResultItem } from '../types';
import { IsArray, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PredictResponseDto {
  @ApiProperty({ type: [PredictResultItem] })
  @IsArray()
  @ValidateNested({ each: true })
  data: PredictResultItem[];
}
