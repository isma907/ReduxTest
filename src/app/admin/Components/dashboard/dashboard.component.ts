import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import * as searchActions from '../../_actions/search.actions'
import * as searchSelectors from '../../_selectors/search.selectors'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(
    private store: Store<any>,
  ) { }

  search: string
  items$: Observable<any>;

  ngOnInit() {
    // this.items$ = this.store.select(state => state.admin.search.movies)
    this.items$ = this.store.select(searchSelectors.getMovies)
  }

  buscar() {
    this.store.dispatch(searchActions.search({ query: this.search }))
  }

}