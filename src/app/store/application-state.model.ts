export interface ApplicationState {
	readonly authState: AuthState;
}

export interface AuthState {
	readonly isAuth: boolean;
}
