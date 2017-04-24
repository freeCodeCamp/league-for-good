import React from 'react';
import { List, Datagrid, TextField } from 'admin-on-rest/lib/mui';

import Icon from 'material-ui/svg-icons/content/add';

export const LeagueIcon = Icon;

export const League = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);