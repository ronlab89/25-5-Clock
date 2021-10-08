import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const LengthControls = (props) => {

    const { title, changeTime, type, time, formatTime } = props;

    return (
        <div className="col-6 row g-0 align-content-center">
            <button id="break-decrement" className="btn col-4 red" onClick={() => changeTime(-60, type)}>
                <FontAwesomeIcon icon={faMinusCircle} />
            </button>
            <span id="break-length" className="col-4 break">
                {formatTime(time)}</span>
            <button id="break-increment" className="btn col-4 green" onClick={() => changeTime(60, type)}>
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            <span id="break-label" className="col-12">{title}</span>
        </div>
    );
}

export default LengthControls;