import { ActionReducerMap } from '@ngrx/store';
import { ApplicationState } from '../application-state.model';
import { authReducer } from './auth.reducer';

export const appState: ActionReducerMap<ApplicationState> = {
	authState: authReducer
};
