import { createFeatureSelector, createSelector } from '@ngrx/store';

import { WeighInActions, SET_WEIGHINS } from './daily-weight-tracker.actions';
import { Weight } from './daily-weight-tracker.model';
import * as fromRoot from '../app.reducer';

export interface WeighInState {
	dailyWeighIns: Weight[];
	weighIn: Weight;
}

export interface State extends fromRoot.State {
	weighing: WeighInState;
}

const initialState: WeighInState = {
	dailyWeighIns: [],
	weighIn: null
};

export function weighInReducer(state = initialState, action: WeighInActions) {
	switch (action.type) {
		case SET_WEIGHINS:
			return {
				...state,
				dailyWeighIns: action.payload
			};
		default: {
			return state;
		}
	}
}

export const getWeighInState = createFeatureSelector<WeighInState>('weighing');

export const getdailyWeighIns = createSelector(getWeighInState, (state: WeighInState) => state.dailyWeighIns);
export const getWeighIn = createSelector(getWeighInState, (state: WeighInState) => state.weighIn);
