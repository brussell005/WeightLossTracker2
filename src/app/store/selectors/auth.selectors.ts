import { createSelector } from '@ngrx/store';
import { ApplicationState } from '../application-state.model';
import { AuthState } from '../auth-state.model';

export const authState = ({ authState }: ApplicationState) => authState;
export const selectIsAuth = createSelector(authState, ({ isAuth }: AuthState) => isAuth);
