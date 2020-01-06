import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'
import { Observable, of } from 'rxjs'

import * as searchActions from '../../_actions/search.actions'
import * as searchSelectors from '../../_selectors/search.selectors'
import { map, tap, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(
    private store: Store<any>,
  ) { }

  search$: Observable<any>;
  items$: Observable<any>;

  ngOnInit() {
    // this.items$ = this.store.select(state => state.admin.search.movies)
    this.search$ = this.store.select(searchSelectors.getFilter)
    this.items$ = this.store.select(searchSelectors.getMovies)
  }

  multiple() {
    this.store.dispatch(searchActions.search({ query: this.search$ }))
  }


  buscar() {
    this.store.dispatch(searchActions.search({ query: this.search$ }))
  }



  usuario = {
    nombre: "ismael",
    apellido: "Fernandez"
  }

  userData = {
    direccion: "los Olmos"
  }


  concatenar() {

    const myObservable = of(this.usuario);
    const myObservable2 = of(this.userData);

    // Create observer object

    // Execute with the observer object
    myObservable.pipe(
      switchMap(data => {
        return myObservable2.pipe(
          map(data2 => {
            console.log({ data: data, data2 })
          })
        )
      }
      )
    ).subscribe()

  }


}