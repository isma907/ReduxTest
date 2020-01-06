import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MoviesService } from '../_services/movies.service';
import * as searchActions from '../_actions/search.actions'

@Injectable()
export class MovieEffects {

  search$ = createEffect(
    () => this.actions$.pipe(
      ofType(searchActions.search),
      switchMap((action: any) =>
        this.moviesService.getData(action.query).pipe(
          map((movies: any) => searchActions.searchSuccess({ data: movies.items })),
          catchError(message => of(searchActions.searchFailure(message))
          )
        )
      )
    )
  );


  removeItems$ = createEffect(
    () => this.actions$.pipe(
      ofType(searchActions.deleteItem),
      switchMap(res => [
        searchActions.deleteItemSuccess(),
      ]),
      catchError(error => searchActions.searchFailure)
    )
  );


  removeSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(searchActions.deleteItemSuccess),
      switchMap(res => [
        searchActions.search({ query: "Titanic" }),
      ]),
    )
  )



  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) { }
}