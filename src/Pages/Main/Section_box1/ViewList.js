import React from 'react'

function ViewList(props) {
  return (
    <li
    style={{backgroundImage:`url(../../../img/main_img/section_box1/main_bg_wrap/${props.bgImg})`}}
    className={props.action}>
    </li>
  )
}

export default ViewList