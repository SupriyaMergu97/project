import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';


@NgModule({
  declarations: [LoginComponent,
    SignupComponent, HomeComponent, AboutUsComponent, DialogboxComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule
  ],
  entryComponents: [DialogboxComponent]
})
export class LayoutModule { }
