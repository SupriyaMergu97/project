import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SidenavModule { }
