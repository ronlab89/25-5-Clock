import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const LengthControls = (props) => {

    const { title, idTitle, idDecrement, idIncrement, idLength, changeTime, type, time } = props;

    return (
        <div className="col-6 row g-0 align-content-center">
            <button id={idDecrement} className="btn col-4 red" onClick={() => changeTime(-60, type, -1)}>
                <FontAwesomeIcon icon={faMinusCircle} />
            </button>
            <span id={idLength} className="col-4 break">
                {time}</span>
            <button id={idIncrement} className="btn col-4 green" onClick={() => changeTime(60, type, 1)}>
                <FontAwesomeIcon icon={faPlusCircle} />
            </button>
            <span id={idTitle} className="col-12">{title}</span>
        </div>
    );
}

export default LengthControls;