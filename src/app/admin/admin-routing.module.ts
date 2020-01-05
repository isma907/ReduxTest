import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './Components/layout/layout.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TablesComponent } from './components/tables/tables.component';
import { CardsComponent } from './components/cards/cards.component'
import { ColorsComponent } from './components/colors/colors.component';
import { BordersComponent } from './components/borders/borders.component';
import { AnimationsComponent } from './components/animations/animations.component';
import { OthersComponent } from './components/others/others.component';
import { ButtonsComponent } from './components/buttons/buttons.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'colors',
        component: ColorsComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'borders',
        component: BordersComponent
      },
      {
        path: 'animations',
        component: AnimationsComponent
      },
      {
        path: 'others',
        component: OthersComponent
      },
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
