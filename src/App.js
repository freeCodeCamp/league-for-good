import React from 'react';

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

import Menu from './Menu';
import { Dashboard } from './dashboard';
import { LeagueIcon } from './league';

const App = () => (
    <Admin title="League Administration Panel" dashboard={Dashboard} menu={Menu} restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="league" icon={LeagueIcon} />
    </Admin>
);

export default App;