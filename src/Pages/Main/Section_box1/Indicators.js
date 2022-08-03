import React from 'react'
import uuid from 'react-uuid'

function Indicators(props) {
  return (
    <div className="indicators">
    <ul className='blind_area'>
        {props.ListData.map((data, index) =>{
          return (
            <li key={uuid()} className={props.count === index ? "action" :null}>
              <a 
              href="#"
              onClick={e => {
                e.preventDefault();
                return props.SetCount(index);
              }}
              >
                <span>{data.num}번째 광고 배경 설명</span>
              </a>
            </li>
          )
        })}
    </ul>
    </div>
  )
}

export default Indicators