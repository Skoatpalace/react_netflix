import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

const Spinner = props => {
    return (
        <FontAwesomeIcon
            icon="spinner"
            pulse
            size="7x"
            className="fa-faSpinner"
        />
    )
}

export { Spinner }