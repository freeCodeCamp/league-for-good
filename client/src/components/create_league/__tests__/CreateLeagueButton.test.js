import test from 'tape';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FlatButton from 'material-ui/FlatButton';

import CreateLeagueButton from '../CreateLeagueButton';
import { cssCreateLeague } from '../../styles';

configure({ adapter: new Adapter() });

test('shallow render test of create league button', (t) => {

	const wrapper = shallow(
		<CreateLeagueButton
			active={true}
			icon="/test"
			label="test"
		/>
	);

	t.equal(wrapper.type(), FlatButton,
		'Create league button did not render a FlatButton');

	t.end();
});
