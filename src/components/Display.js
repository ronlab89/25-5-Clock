import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faPowerOff, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
// UndoAlt icono de repeat

const Display = (props) => {
    // console.log(props);
    
    const {meddle, session, reset, timeMinutes, timeSeconds, dBreak, iBreak, dSession, iSession, play, pause} = props;

    return (
        <div className="screen row g-0 p-2">
            <div id="timer-label" className="col-12">session</div>
            <div id="time-left" className="col-12">{timeMinutes}:{timeSeconds}</div>
            <div className="col-12">
                <div className="row g-0 control">
                    <div id="start_stop" className="col-8">
                    <button className="btn col-6 green" onClick={play}>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                    <button className="btn col-6 blue" onClick={pause}>
                        <FontAwesomeIcon icon={faPause} />
                    </button>
                    </div>
                    <button id="reset" className="btn col-4 red" onClick={reset}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>
            </div>
            <div className="col-6 row g-0 align-content-center">
                <button id="break-decrement" className="btn col-4 red" onClick={dBreak}>
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>
                <span id="break-length" className="col-4 break">
                    {meddle}</span>
                <button id="break-increment" className="btn col-4 green" onClick={iBreak}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                <span id="break-label" className="col-12">Break-lenght</span>
            </div>
            <div className="col-6 row g-0 align-content-center">
                <button id="session-decrement" className="btn col-4 red" onClick={dSession}>
                    <FontAwesomeIcon icon={faMinusCircle} />
                </button>
                <span id="session-length" className="col-4">
                    {session}</span>
                <button id="session-increment" className="btn col-4 green" onClick={iSession}>
                    <FontAwesomeIcon icon={faPlusCircle} />
                </button>
                <span id="session-label" className="col-12 session">Session-length</span>
            </div>
        </div>
    );
}

export default Display;