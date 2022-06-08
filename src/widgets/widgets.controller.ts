import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { WidgetsService } from './widgets.service';

@Controller('widgets')
export class WidgetsController {
  constructor(private widgetService: WidgetsService) {}

  @Get('dashboard')
  getWidgets() {
    return this.widgetService.getWidgets();
  }

  @Get('/:id')
  getWidget(@Param('id', ParseIntPipe) id: number) {
    return this.widgetService.getWidget(id);
  }
}
