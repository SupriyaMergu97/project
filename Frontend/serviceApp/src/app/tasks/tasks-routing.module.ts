import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DialogComponent } from './dialog/dialog.component';
const routes: Routes = [
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'dailog',
    component: DialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
