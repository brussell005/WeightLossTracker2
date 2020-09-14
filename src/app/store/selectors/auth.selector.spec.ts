import { selectIsAuth } from './auth.selectors';
import { AUTH_INITIAL_MOCK_STATE } from '../auth-initial-mock-state';

const state = AUTH_INITIAL_MOCK_STATE;

describe('Auth selectors', () => {
	it('should retrieve authState', () => {
		expect(selectIsAuth.projector(state)).toBe(state.isAuth);
	});
});
