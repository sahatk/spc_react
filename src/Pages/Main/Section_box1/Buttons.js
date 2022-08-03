import React from 'react'

function Buttons(props) {
  return (
    <div classNameName='buttons'>
        <div className="prev_button_wrap" onClick={props.prevEvent}>
            <div className="prev_button"></div>
            <p>prev</p>
        </div>
        <div className="next_button_wrap" onClick={props.nextEvent}>
            <div className="next_button"></div>
            <p>next</p>
        </div>
    </div>
  )
}

export default Buttons