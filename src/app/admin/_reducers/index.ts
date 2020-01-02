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
import * as fromTitle from './title.reducer';

export interface State {
  dashboard: fromDashboard.State;
  search: fromSearch.State,
  title: fromTitle.State
}

export const reducer: ActionReducerMap<State> = {
  title: fromTitle.reducer,
  dashboard: fromDashboard.reducer,
  search: fromSearch.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
