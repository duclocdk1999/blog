import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class AuthModule { }
