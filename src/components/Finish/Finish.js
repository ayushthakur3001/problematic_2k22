import './style.scss'
import React from 'react'
import thanks from '../../assets/thanks.png'

const Finish = () => {
    let time = (30 * 60 * 1000) - localStorage.getItem('seconds');
    let minutes = Math.floor(time / (60 * 1000));

    return (
        <div className='finish' >
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} >
                <h1 style={{ margin: '5px' }} >Thanks For Participating !</h1>
                <h4 style={{ margin: '5px' }} ></h4>
            </div>
            <img src={thanks} alt='alt..' />
            <div className='time-taken' >
                <p style={{ textAlign: 'start' }} >Time Taken</p>
                <p>{minutes}min : {(time - minutes * 60 * 1000) / 1000}sec</p>
                <h3></h3>
            </div>

        </div>
    )
}
export default Finish