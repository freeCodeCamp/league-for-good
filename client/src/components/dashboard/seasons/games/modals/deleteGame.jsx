import React from 'react';
import PropTypes from 'prop-types';

const DeleteGameForm = props => (
    <p>
        Are you sure you want to delete the game on
        <strong>{props.game.date}?</strong>
        This action cannot be undone.
    </p>
);

DeleteGameForm.propTypes = {
    game: PropTypes.object
};

export default DeleteGameForm;
