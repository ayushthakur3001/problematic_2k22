import Puzzle from '../puzzle';
import Jigsaw from '../Jigsaw';
import Tower from '../Tower';
import Sudoku from '../Sudoku';
import Queens from '../Queens';
import Finish from '../Finish/Finish';
import { useState, useEffect, useContext } from "react";
import { Button } from '@mui/material';
import Timer from '../Timer';
import PollContext from '../../store/prob-context';


const Container = () => {
    const ctx = useContext(PollContext);
    const handleBtnClick = () => {
        ctx.handleStartClick();
        ctx.setDisabled();
        ctx.setTimer();
    }
    return (
        <div className="container">
            {
                ctx.currentProblem == 1 &&
                <Sudoku />
            }
            {
                ctx.currentProblem == 2 &&
                <Tower />
            }
            {
                ctx.currentProblem == 3 &&
                <Puzzle />
            }
            {
                ctx.currentProblem == 4 &&
                <Queens />
            }
            {/* {
                ctx.currentProblem == 5 &&
                <Jigsaw />
            } */}
            {
                ctx.currentProblem == 5 &&
                <Finish />
            }
        </div>
    )
}

export default Container
