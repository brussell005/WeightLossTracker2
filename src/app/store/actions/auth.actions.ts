import { createAction, union } from '@ngrx/store';

export const login = createAction('[Login] Request Login');

const all = union({
	login
});

export type LoginActionsTypes = typeof all;
