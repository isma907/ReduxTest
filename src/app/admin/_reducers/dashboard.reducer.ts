import { createReducer, on, Action } from '@ngrx/store'
import * as dashboardActions from '../_actions/dashboard.actions'


export const dashboardFeatureKey = 'dashboard';

export interface State {
  loading: boolean
}

export const initialState: State = {
  loading: false
};

const dashboardReducer = createReducer(
  initialState,
  on(dashboardActions.loadDashboards, state => ({ ...state, loading: true })),
  on(dashboardActions.loadDashboardsSuccess, (state) => ({ ...state, loading: false }))
);

export function reducer(state: State | undefined, action: Action) {
  return dashboardReducer(state, action);
}
