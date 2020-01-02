import { Action, createReducer, on } from '@ngrx/store';
import * as searchActions from '../_actions/search.actions'

export const searchFeatureKey = 'search';

export interface State {
  query: string
  movies: any[]
}

export const initialState: State = {
  query: "",
  movies: []
};

const searchReducer = createReducer(
  initialState,
  on(searchActions.search, (state, payload) => ({ ...state, loading: true })),
  on(searchActions.searchFailure, (state, payload) => ({ ...state, loading: false, movies: payload.error })),
  on(searchActions.searchSuccess, (state, payload) => ({ ...state, loading: false, movies: payload.data }))
);

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}
