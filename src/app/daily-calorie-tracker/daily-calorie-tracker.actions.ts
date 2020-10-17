import { Action } from '@ngrx/store';
import { Calories } from './daily-calorie-tracker.model';

export const SET_CALORIESIN = '[Counting] Set Available Counting';

export class SetCaloriesIn implements Action {
    readonly type = SET_CALORIESIN;

    constructor(public payload: Calories[]) { }
}

export type CaloriesInActions = SetCaloriesIn;
