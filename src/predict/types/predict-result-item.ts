import { PredictItem } from './predict-item';
import { Sentiment } from './sentiment';
import { ArrayNotEmpty, IsArray, IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PredictResultItem extends PredictItem {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  topics: string[];

  @ApiProperty({ example: [Sentiment.Positive] })
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(PredictItem, { each: true })
  sentiments: Sentiment[];
}
