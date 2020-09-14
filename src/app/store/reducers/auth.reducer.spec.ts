import { AuthState } from '../auth-state.model';
import { login } from '../actions/auth.actions';
import { AUTH_INITIAL_MOCK_STATE } from '../auth-initial-mock-state';
import { authReducer } from './auth.reducer';

describe('Settings Reducer', () => {
	it('should set the isAuth key to true on `login`', () => {
		const action = login();
		const expected: AuthState = {
			...AUTH_INITIAL_MOCK_STATE,
			isAuth: true
		};
		const actual = authReducer(AUTH_INITIAL_MOCK_STATE, action);

		expect(actual).toEqual(expected);
	});
});
