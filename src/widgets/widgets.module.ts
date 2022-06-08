import { Module } from '@nestjs/common';
import { WidgetsController } from './widgets.controller';
import { WidgetsService } from './widgets.service';
import 'dotenv/config';

@Module({
  controllers: [WidgetsController],
  providers: [WidgetsService],
})
export class WidgetsModule {}
