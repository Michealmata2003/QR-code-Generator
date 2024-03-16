import React from 'react'
import Countdown from 'react-countdown';


const CountDown = () => {
    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };
    return (
        <div>

            <Countdown
                date={Date.now() + 5000}
                renderer={renderer}
            />,
        </div>
    )
}

export default CountDown
