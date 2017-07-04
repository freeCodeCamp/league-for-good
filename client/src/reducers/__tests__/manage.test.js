import test from 'tape';
import reducer from '../manage';

import { CHANGE_MANAGE_VIEW, RESET_DASHBOARD } from '../../actions/types';

test('manage reducer has correct default state', (assert) => {
    const expectedState = {
        view: null
    };

    const resultState = reducer(undefined, {});

    assert.deepEqual(resultState, expectedState, 'has correct default state');
	assert.end();
});

test('manage reducer change manage view returns the action view', (assert) => {
    const expectedState = {
        view: 'testView'
    };

    const testAction = {
        type: CHANGE_MANAGE_VIEW,
        view: 'testView'
    };

    const resultState = reducer(undefined, testAction);

    assert.deepEqual(resultState, expectedState, 'returns action view');
	assert.end();
});

test('auth reducer reset dashboard returns null view', (assert) => {
    const expectedState = {
        view: null
    };

    const testAction = {
        type: RESET_DASHBOARD
    };

    const resultState = reducer(undefined, testAction);

    assert.deepEqual(resultState, expectedState, 'returns null view');
	assert.end();
});
