import React from 'react'

// BANNER

import './Magazine_box2.css'

function Magazine_box2() {
  return (
    <section id="Magazine_box2">
        <h1 class="blind">BANNER</h1>
        <div class="container">
            <div class="banner_wrap">
                <p class="font_20 color_sky">spc magazine</p>
                <p class="font_24">건강한 소식이 가득한 <span class="color_sky">spc 매거진 뉴스레터</span>를 매일 이메일로 받아보세요.</p>
            </div>
            <a href="#" class="apply_button">
                <h2 class="blind">구독 신청</h2>
                <div class="apply_icon"><h2 class="blind">pencil(연필) 아이콘</h2></div>
                <div class="apply_title"><p class="font_24">구독신청</p></div>
            </a>
        </div>
    </section> 
  )
}

export default Magazine_box2