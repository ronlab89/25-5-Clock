import React from 'react';

const Display = () => {
    return (
        <div className="screen row g-0 p-2">
            <div className="col-12">session</div>
            <div className="col-12">25:00</div>
            <div className="col-12">
                <div className="row g-0">
                    <button className="btn col-4">Play</button>
                    <button className="btn col-4">Pause</button>
                    <button className="btn col-4">Reset</button>
                </div>
            </div>
            <div className="col-6 row g-0">
                <button id="break-decrement" className="btn col-4">-</
                button>
                <span id="break-label" className="col-4">Break</span>
                <button id="break-increment" className="btn col-4">+</
                button>
                <span className="col-12">5</span>
            </div>
            <div className="col-6 row g-0">
                <button id="session-decrement" className="btn col-4">-</
                button>
                <span id="session-label" className="col-4">Session</
                span>
                <button id="session-increment" className="btn col-4">+</
                button>
                <span className="col-12">25</span>
            </div>
        </div>
    );
}

export default Display;