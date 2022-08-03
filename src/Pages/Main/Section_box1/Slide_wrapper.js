import React from 'react'
import ViewList from './ViewList'

function Slide_wrapper(props) {
  return (
    <div className="view_area">
            <ul>
                {props.ListData.map((data,index) => (
                    <ViewList
                        key={data.primaryKey}
                        action={props.count === index ? "action" : null}
                        bgImg={data.bgImg}
                        content={data.num}
                    />
                ))}
            </ul>
    </div>
  )
}

export default Slide_wrapper