import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { MoviesService } from '../_services/movies.service';
import * as searchActions from '../_actions/search.actions'

@Injectable()
export class MovieEffects {

  search$ = createEffect(
    () => this.actions$.pipe(
      ofType(searchActions.search),
      switchMap((action: any) =>
        this.moviesService.getData(action.query).pipe(
          map(movies => searchActions.searchSuccess({ data: movies.items })),
          catchError(message => of(searchActions.searchFailure(message))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) { }
}