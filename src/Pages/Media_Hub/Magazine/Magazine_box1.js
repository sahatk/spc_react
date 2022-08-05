import React from 'react'

import './Magazine_box1.css';

function Magazine_box1() {
  return (
    <section id="Magazine_box1">
        <h1 className="blind">SPC MAGAZINE NOW BOX</h1>
        <div className="container">
            <div className="magazine_title"><p className="font_50">SPC 매거진 NOW</p></div>
            <div className="magazine_card_box">
                <ul className="magazine_card_ul">
                    <li className="outline">
                        <div className="magazine_card">
                            <div className="magazine_card_image_01">
                                <h2 className="blind">magazine_카드_이미지_01</h2>
                            </div>
                            <div className="magazine_card_text">
                                <p className="font_20 magazine_card_title">spc magazine 2022년 06월호</p>
                                <p className="font_18_b magazine_card_date">2022.06.30</p>
                            </div>
                        </div>
                    </li>
                    <li className="outline">
                        <div className="magazine_card">
                            <div className="magazine_card_image_02">
                                <h2 className="blind">magazine_카드_이미지_02</h2>
                            </div>
                            <div className="magazine_card_text">
                                <p className="font_20 magazine_card_title">spc magazine 2022년 05월호</p>
                                <p className="font_18_b magazine_card_date">2022.05.31</p>
                            </div>
                        </div>
                    </li>
                    <li className="outline">
                        <div className="magazine_card">
                            <div className="magazine_card_image_03">
                                <h2 className="blind">magazine_카드_이미지_03</h2>
                            </div>
                            <div className="magazine_card_text">
                                <p className="font_20 magazine_card_title">spc magazine 2022년 04월호</p>
                                <p className="font_18_b magazine_card_date">2022.04.30</p>
                            </div>
                        </div>
                    </li>
                    <li className="outline">
                        <div className="magazine_card">
                            <div className="magazine_card_image_04">
                                <h2 className="blind">magazine_카드_이미지_04</h2>
                            </div>
                            <div className="magazine_card_text">
                                <p className="font_20 magazine_card_title">spc magazine 2022년 03월호</p>
                                <p className="font_18_b magazine_card_date">2022.03.31</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Magazine_box1