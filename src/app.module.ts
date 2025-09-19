import { Module } from '@nestjs/common';
import { DatabaseService, DatabaseModule } from './database';
import { PredictModule } from './predict';

@Module({
  imports: [DatabaseModule, PredictModule],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
