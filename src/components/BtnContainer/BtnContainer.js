import React from 'react';
import { useContext } from 'react';
import PollContext from '../../store/prob-context';
import { Button } from "@mui/material";
import './style.scss'
const BtnContainer = () => {
    const ctx = useContext(PollContext);
    const handleBtnClick = () => {
        ctx.handleStartClick();
        ctx.setDisabled();
        ctx.setTimer();
    }

    return (
        <div className="btn-container" >
            <Button onClick={ctx.handleClick} className='timer-btn' variant='contained' disabled={!ctx.dis} color='primary'  > Next </Button>
        </div>
    )
}
export default BtnContainer