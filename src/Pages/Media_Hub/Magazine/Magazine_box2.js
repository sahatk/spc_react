import React from 'react'

// BANNER

import './Magazine_box2.css'

function Magazine_box2() {
  return (
    <section id="Magazine_box2">
        <h1 className="blind">BANNER</h1>
        <div className="container">
            <div className="banner_wrap">
                <p className="font_20 color_sky">spc magazine</p>
                <p className="font_24">건강한 소식이 가득한 <span className="color_sky">spc 매거진 뉴스레터</span>를 매일 이메일로 받아보세요.</p>
            </div>
            <a href="#" className="apply_button">
                <h2 className="blind">구독 신청</h2>
                <div className="apply_icon"><h2 className="blind">pencil(연필) 아이콘</h2></div>
                <div className="apply_title"><p className="font_24">구독신청</p></div>
            </a>
        </div>
    </section> 
  )
}

export default Magazine_box2