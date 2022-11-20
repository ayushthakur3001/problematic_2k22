import "./style.scss";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useContext, useEffect, useState } from "react";
import { Button } from '@mui/material';
import Countdown from "react-countdown";
import PollContext from "../../store/prob-context";
const Timer = () => {
    const [showTime, setShowTime] = useState(true);
    const ctx = useContext(PollContext);
    const [seconds, setSeconds] = useState(30 * 60 * 1000);

    useEffect(() => {
        setTimeout(() => {
            setSeconds(seconds - 1000);
        }, 1000);
    }, [seconds]);
    localStorage.setItem('seconds', seconds);
    const Completionist = () => <span>Time Over!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <span>{minutes}:{seconds < 10 ? "0" + seconds : seconds}</span>;
        }
    };
    return (
        <div className="timer">
            <h1>Problematic</h1>
            <div>
                <Button onClick={() => { ctx.handleClick('next') }} className='timer-button' variant='contained' disabled={ctx.currentProblem === 5} color='primary'  > {ctx.currentProblem === 4 ? 'Finish' : 'Next'} </Button>
                <Button onClick={() => { ctx.handleClick('previous') }} className='timer-button' variant='contained' disabled={ctx.currentProblem === 1 || ctx.currentProblem === 5} color='secondary'  > Previous </Button>
            </div>
            <div>
                <h3>Remaining Time</h3>
                {
                    ctx.currentProblem === 5 ?
                        <p style={{ color: 'red', fontSize: '20px' }} >Time Over!</p> :
                        <Countdown onComplete={() => { ctx.handleClick('finish') }} className="countdown" date={Date.now() + seconds} renderer={renderer} />


                }

            </div>

        </div>
    )
}

export default Timer
