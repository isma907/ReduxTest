import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store'
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './Components/layout/layout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { reducer } from './_reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './_effects/movies.effects';
import { TablesComponent } from './components/tables/tables.component';
import { CardsComponent } from './components/cards/cards.component'

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, TablesComponent, CardsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forFeature('admin', reducer),
  ]
})
export class AdminModule { }
