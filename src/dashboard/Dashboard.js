import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

// The default page that the user sees when they log in
export default () => (
    <Card style={{ margin: '2em' }}>
        <CardHeader title="Welcome to the League For Good administration panel" />
        <CardText>To start, click add league in the menu on the right</CardText>
    </Card>
);