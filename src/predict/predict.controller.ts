import { Body, Controller, Post } from '@nestjs/common';
import { PredictDto } from './dtos/predict-dto';

@Controller('predict')
export class PredictController {
  @Post()
  predict(@Body() input: PredictDto) {
    return input;
  }
}
