import { Module } from '@nestjs/common';
import { PredictService } from './predict.service';
import { PredictController } from './predict.controller';

@Module({
  providers: [PredictService],
  controllers: [PredictController],
})
export class PredictModule {}
