import React from "react";
import './style.scss'
import PollContext from "../../store/prob-context";
import { useContext } from "react";
import background from '../../assets/background.png'
import { Button } from "@mui/material";
import puzzle from '../../assets/p1.png'
import bulb from '../../assets/p2.png'

const ImageContainer = () => {
    const ctx = useContext(PollContext);
    const handleBtnClick = () => {
        ctx.handleStartClick();
        ctx.setDisabled();
        ctx.setTimer();
    }

    return (
        <div className="img-container" >
            <div className="wrapper" >
                <img src={puzzle} alt='puzzle-image' />
                <img src={background} alt='brain-image' />
                <img src={bulb} alt='bulb-image' />
            </div>

            <Button onClick={() => { ctx.handleClick('next') }} className='timer-btn' variant='contained' disabled={ctx.dis} color='primary'  > Start </Button>
        </div>
    )
}
export default ImageContainer