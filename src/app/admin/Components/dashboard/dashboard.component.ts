import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as searchActions from '../../_actions/search.actions'
import * as searchReducer from '../../_reducers/search.reducer'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store<{ search: any }>) { }

  search: string
  items$: Observable<any>

  ngOnInit() {

    // this.items$ = this.store.pipe(select(searchReducer.getMovies));
    this.items$ = this.store.pipe(select(searchReducer.getMovies));
  }

  buscar() {
    this.store.dispatch(searchActions.search({ query: this.search }))
  }

}