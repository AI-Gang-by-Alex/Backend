import { Body, Controller, Post } from '@nestjs/common';
import { PredictDto, PredictResponseDto } from './dtos';
import { Sentiment } from './types';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('predict')
export class PredictController {
  @ApiOkResponse({ type: PredictResponseDto })
  @Post()
  predict(@Body() dto: PredictDto): PredictResponseDto {
    return {
      data: dto.data.map((item) => ({
        ...item,
        topics: ['1234'],
        sentiments: [Sentiment.Positive],
      })),
    };
  }
}
