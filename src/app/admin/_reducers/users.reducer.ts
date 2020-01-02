import { Action, createReducer, on } from '@ngrx/store';


export const usersFeatureKey = 'users';

export interface State {
  search: string,
  loading: boolean
}

export const initialState: State = {
  search: "",
  loading: false
};

const usersReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}
