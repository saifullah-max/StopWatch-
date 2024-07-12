import React from 'react'
import './controlledButtons.css'

export const ControlledButtons = (props) => {
    const startButton = (
        <div onClick={props.handleStart} className='btn btn-one btn-start'>
            Start
        </div>
    );

    const activeButtons = (
        <div className='btn-grp'>
        <div onClick={props.handleReset} className='btn btn-two'>
            Reset
        </div>
        <div onClick={props.handlePauseResume} className='btn btn-one'>
            {props.isPaused ? "Resume": "Pause" }
        </div>
        </div>
    );

  return (
    <div className='Control-Buttons'>
      <div>{props.active? activeButtons : startButton}</div>  
    </div>
  )
}
