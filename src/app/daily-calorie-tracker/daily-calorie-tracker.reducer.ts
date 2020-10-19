import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CaloriesInActions, SET_CALORIESIN } from './daily-calorie-tracker.actions';
import { Calories } from './daily-calorie-tracker.model';
import * as fromRoot from '../app.reducer';

export interface CaloriesInState {
    dailyCaloriesIn: Calories[];
    caloriesIn: Calories;
}

export interface State extends fromRoot.State {
    counting: CaloriesInState;
}

const initialState: CaloriesInState = {
    dailyCaloriesIn: [],
    caloriesIn: null
};

export function caloriesInReducer(state = initialState, action: CaloriesInActions) {
    switch (action.type) {
        case SET_CALORIESIN:
            return {
                ...state,
                dailyCaloriesIn: action.payload
            };
        default: {
            return state;
        }
    }
}

export const getCaloriesInState = createFeatureSelector<CaloriesInState>('counting');

export const getdailyCaloriesIns = createSelector(getCaloriesInState, (state: CaloriesInState) => state.dailyCaloriesIn);
export const getWeighIn = createSelector(getCaloriesInState, (state: CaloriesInState) => state.caloriesIn);
