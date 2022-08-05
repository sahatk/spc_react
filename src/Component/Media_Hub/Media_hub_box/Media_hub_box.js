// MEDIA HUB 박스

import React from 'react'

import './Media_hub_box.css';

function Media_hub_box() {
  return (
    <section id="media_hub_box">
        <h1 className="blind">MEDIA HUB BOX</h1>
        <div className="container">
            <div className="media_hub_box_image_01"><h2 className="blind">여성 이미지</h2></div>
            <div className="media_hub_title"><p className="font_65">media hub</p></div>
            <div className="media_hub_text"><p className="font_20_thin">spc그룹의 다양한 브랜드 소식과 <br/>콘텐츠들을 한눈에 확인해 보세요!</p></div>
        </div>
        <div className="media_hub_box_image_02"><h2 className="blind">남성 이미지</h2></div>
    </section>
  )
}

export default Media_hub_box