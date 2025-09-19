import { Module } from '@nestjs/common';
import { PredictService } from './predict.service';
import { PredictController } from './predict.controller';
import { DatabaseService } from '../database';

@Module({
  providers: [PredictService, DatabaseService],
  controllers: [PredictController],
})
export class PredictModule {}
