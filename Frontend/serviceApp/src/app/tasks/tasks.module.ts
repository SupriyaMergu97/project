import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { BookingComponent } from './booking/booking.component';
import { MaterialModule } from '../material.module';
import { DialogComponent } from './dialog/dialog.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [BookingComponent, DialogComponent, TaskListComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule
  ],
  entryComponents: [DialogComponent]
})
export class TasksModule { }
