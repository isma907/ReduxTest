import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../_reducers/search.reducer'

export const getMoviesState = createFeatureSelector<State>('movies');
export const getMovies = createSelector(
    state => state["admin"],
    (state: any) => state.search.movies
);

export const getFilter = createSelector(
    state => state["admin"],
    (state: any) => state.search.query
);
export const getLoading = createSelector(
    state => state["admin"],
    (state: any) => state.search.loading
);
