import { Action, createReducer, on } from '@ngrx/store';

export const authFeatureKey = 'auth';

export interface State {
  loading: boolean,
  username: string,
  password: string,
}

export const initialState: State = {
  loading: false,
  username: "",
  password: ""
};

const authReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
