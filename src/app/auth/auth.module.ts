import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'
import { StoreDevtools } from '@ngrx/store-devtools'

import { LoginComponent } from './Components/login/login.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { RegisterComponent } from './Components/register/register.component'

import { AuthRoutingModule } from './auth.routing.module';
import { reducer } from './_reducers/auth.reducer'

@NgModule({
  declarations: [LoginComponent, LayoutComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducer)
  ]
})
export class AuthModule { }
