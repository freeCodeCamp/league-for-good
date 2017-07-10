import test from 'tape';
import reducer from '../auth';

import { INIT_AUTH_STATE, LOG_OUT } from '../../actions/types';

test('auth reducer has correct default state', (assert) => {
    const expectedState = {
        loggedIn: false,
        loading: true
    };

    const resultState = reducer(undefined, {});

    assert.deepEqual(resultState, expectedState, 'has correct default state');
	assert.end();
});

test('auth reducer init returns action payload', (assert) => {
    const expectedState = {
        testPayloadResult: true
    };

    const testAction = {
        type: INIT_AUTH_STATE,
        payload: expectedState
    };

    const resultState = reducer(undefined, testAction);

    assert.equal(resultState, expectedState, 'returns action payload');
	assert.end();
});

test('auth reducer logout sets loggedIn to false and preserves other state', (assert) => {
    const expectedState = {
        testBool: false,
        testString: 'testing',
        loggedIn: false
    };

    const testState = {
        testBool: false,
        testString: 'testing',
        loggedIn: true
    };

    const testAction = {
        type: LOG_OUT
    };

    const resultState = reducer(testState, testAction);

    assert.deepEqual(resultState, expectedState, 'sets logggedIn to false');
	assert.end();
});
