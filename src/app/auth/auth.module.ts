import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HomePublicComponent } from './components/home-public/home-public.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomePublicComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: []
})
export class AuthModule { }
