import { createAction, props } from '@ngrx/store';

export const search = createAction(
  '[Search] Load Searchs',
  props<{ query: string }>()
);

export const searchSuccess = createAction(
  '[Search] Load Searchs Success',
  props<{ data: any }>()
);

export const searchFailure = createAction(
  '[Search] Load Searchs Failure',
  props<{ error: any }>()
);
