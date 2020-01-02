import { Action, createReducer, on } from '@ngrx/store';


export const dashboardFeatureKey = 'dashboard';

export interface State {
  loading: boolean
}

export const initialState: State = {
  loading: false
};

const dashboardReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return dashboardReducer(state, action);
}
