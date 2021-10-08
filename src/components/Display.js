import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faPowerOff} from '@fortawesome/free-solid-svg-icons';

const Display = (props) => {
    console.log(props);
    
    const {reset, time, timeDisplay, play, ifBreak} = props;

    return (
        <div>
            <div id="timer-label" className="col-12">{ifBreak ? "Break" : "Session"}</div>
            <div id="time-left" className="col-12">{time(timeDisplay)}</div>
            <div className="col-12">
                <div className="row g-0 control mt-4">
                    <div id="start_stop" className="col-8" onClick={play}>
                    <button className="btn col-6 green">
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                    <button className="btn col-6 blue">
                        <FontAwesomeIcon icon={faPause} />
                    </button>
                    </div>
                    <button id="reset" className="btn col-4 red" onClick={reset}>
                        <FontAwesomeIcon icon={faPowerOff} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Display;