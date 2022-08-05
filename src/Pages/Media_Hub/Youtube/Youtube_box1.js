// SPC YOUTUBE Channel 박스

import React from 'react'

import './Youtube_box1.css';

function Youtube_box1() {
  return (
    <section id="Youtube_box1">
        <h1 className="blind">YOUTUBE Channel BOX</h1>
        <div className="container">
            <div className="youtube_title"><p className="font_50">YOUTUBE Channel</p></div>
            <div className="youtube_card_box">
                <ul className="youtube_card_ul">
                    <li className="youtube_card_li">
                        <div className="youtube_card_image_01"><h2 className="blind">SPC NEWS Feed 카드 이미지 01</h2></div>
                        <div className="youtube_card_text">
                            <p className="font_20">[spc magazine] 다시 만난 행복상생 무안 양파</p>
                            <div className="date_text"><span className="font_18_b">2022.04.27</span></div>
                        </div>
                    </li>
                    <li className="youtube_card_li">
                        <div className="youtube_card_image_02"><h2 className="blind">SPC NEWS Feed 카드 이미지 02</h2></div>
                        <div className="youtube_card_text">
                            <p className="font_20">[파리바게뜨] 이 남자.. 딸기🍓에 '진심'이다..!👀 논산 딸기밭에서 청년농부 박태준님을 만나봄💙</p>
                            <div className="date_text"><span className="font_18_b">2022.03.22</span></div>
                        </div>
                    </li>
                    <li className="youtube_card_li">
                        <div className="youtube_card_image_03"><h2 className="blind">SPC NEWS Feed 카드 이미지 03</h2></div>
                        <div className="youtube_card_text">
                            <p className="font_20">[spc magazine] 안전문화 정착에 앞장서는 SPC그룹</p>
                            <div className="date_text"><span className="font_18_b">2022.02.28</span></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section> 
  )
}

export default Youtube_box1