import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'
import { State } from '../../_reducers/dashboard.reducer'
import * as dashboardActions from '../../_actions/dashboard.actions'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<{ dashboard: any[] }>) { }

  ngOnInit() {
    this.store.dispatch(dashboardActions.loadDashboards())
  }

  books$: Observable<any[]> = this.store.select(state => state.dashboard);


}
