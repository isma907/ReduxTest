import { Action, createReducer, on } from '@ngrx/store';


export const appFeatureKey = 'app';

export interface State {
  loading: boolean
}

export const initialState: State = {
  loading: false
};

const appReducer = createReducer(
  initialState,
);

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
