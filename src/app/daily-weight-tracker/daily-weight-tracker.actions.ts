import { Action } from '@ngrx/store';
import { Weight } from './daily-weight-tracker.model';

export const SET_WEIGHINS = '[Weighing] Set Available Weighing';

export class SetWeighIns implements Action {
	readonly type = SET_WEIGHINS;

	constructor(public payload: Weight[]) {}
}

export type WeighInActions = SetWeighIns;
