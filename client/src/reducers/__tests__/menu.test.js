import test from 'tape';
import reducer from '../menu';

import { TOGGLE_MENU } from '../../actions/types';

test('menu reducer has correct default state', (assert) => {
    const expectedState = {
        open: true
    };

    const resultState = reducer(undefined, {});

    assert.deepEqual(resultState, expectedState, 'has correct default state');
	assert.end();
});

test('menu reducer toggle menu toggles open state', (assert) => {
    const expectedState = {
        open: false
    };

    const testState = {
        open: true
    }

    const testAction = {
        type: TOGGLE_MENU
    };

    const resultState = reducer(testState, testAction);

    assert.deepEqual(resultState, expectedState, 'toggles open to false');
	assert.end();
});
