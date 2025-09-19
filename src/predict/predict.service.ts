import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database';

@Injectable()
export class PredictService {
  constructor(private db: DatabaseService) {}

  async save() {}
}
