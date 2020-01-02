import { createAction, props, Action } from '@ngrx/store';

export const LoginUser = createAction(
  '[Auth] Load Auths',
  props<{ data: any }>()
);

export const LoginSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ data: any }>()
);

export const LoginError = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);

