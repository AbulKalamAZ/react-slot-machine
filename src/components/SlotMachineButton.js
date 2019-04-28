import React from 'react'
import PropTypes from 'prop-types';

export default function SlotMachineButton(props) {

    return (
        <div className="lever">
            <button
                className="play-button"
                onClick={props.spinTheReel}
            >
                Play
            </button>
        </div>
    )
}

//Type checking using propTypes

SlotMachineButton.propTypes = {
    spinTheReel: PropTypes.func
}
