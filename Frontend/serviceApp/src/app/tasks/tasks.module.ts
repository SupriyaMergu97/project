import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { BookingComponent } from './booking/booking.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule
  ]
})
export class TasksModule { }
