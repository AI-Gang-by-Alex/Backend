import { IsArray, ValidateNested, ArrayNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PredictItem } from '../types';

export class PredictDto {
  @ApiProperty({ type: [PredictItem] })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  data: PredictItem[];
}
