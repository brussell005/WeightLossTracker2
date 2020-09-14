import { createReducer, on, Action } from '@ngrx/store';
import { AuthState } from '../application-state.model';
import { login } from '../actions/auth.actions';

export const initialState: AuthState = {
	isAuth: false
};

const reducer = createReducer(initialState, on(login, (state) => ({ ...state, isAuth: true })));

export function authReducer(state: AuthState | undefined, action: Action) {
	return reducer(state, action);
}
