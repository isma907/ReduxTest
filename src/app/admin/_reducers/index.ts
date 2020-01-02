import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import * as fromDashboard from './dashboard.reducer';
import * as fromSearch from './search.reducer';

export interface State {
  dashboard: fromDashboard.State;
  search: fromSearch.State
}

export const reducer: ActionReducerMap<State> = {
  dashboard: fromDashboard.reducer,
  search: fromSearch.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
