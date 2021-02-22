import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutTileComponent } from './about-tile/about-tile.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [AboutTileComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [AboutTileComponent]
})
export class ComponentsModule { }
