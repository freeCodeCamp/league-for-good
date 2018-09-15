import React from 'react';

const DeleteGameForm = props => (
    <p>
        Are you sure you want to delete the game on <strong>{props.game.date}?</strong>
        This action cannot be undone.
    </p>
);

export default DeleteGameForm;
