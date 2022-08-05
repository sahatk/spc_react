import React from 'react'

import './News_box1.css';

function News_box1() {
  return (
    <section id="News_box1">
        <h1 className="blind">NEWS Feed BOX</h1>
        <div className="container">
            <div className="newsfeed_title"><p className="font_50">NEWS Feed</p></div>
            <div className="newsfeed_card_box">
                <ul className="newsfeed_card_ul">
                    <li className="newsfeed_card_li">
                        <div className="newsfeed_card_image_01"><h2 className="blind">SPC NEWS Feed 카드 이미지 01</h2></div>
                        <div className="newsfeed_card_text">
                            <p className="font_20">SPC삼립 ‘국산 밀 소비 앞장선다’…국산 밀 베이커리 4종 출시</p>
                            <div className="brand_text"><span className="font_18_b">spc 삼립</span></div>
                            <div className="date_text"><span className="font_18_b">2022.07.14</span></div>
                            <div className="view_more">
                                <a target="_blank" href="https://www.naver.com/">view more</a>
                            </div>
                        </div>
                    </li>
                    <li className="newsfeed_card_li">
                        <div className="newsfeed_card_image_02"><h2 className="blind">SPC NEWS Feed 카드 이미지 02</h2></div>
                        <div className="newsfeed_card_text">
                            <p className="font_20">SPC그룹 허영인 회장, 佛대통령 글로벌기업 초청행사 참석</p>
                            <div className="brand_text"><span className="font_18_b">spc 그룹</span></div>
                            <div className="date_text"><span className="font_18_b">2022.07.12</span></div>
                            <div className="view_more">
                                <a target="_blank" href="https://www.naver.com/">view more</a>
                            </div>
                        </div>
                    </li>
                    <li className="newsfeed_card_li">
                        <div className="newsfeed_card_image_03"><h2 className="blind">SPC NEWS Feed 카드 이미지 03</h2></div>
                        <div className="newsfeed_card_text">
                            <p className="font_20">SPC그룹, 싱가포르 파리바게뜨 래플스시티점 오픈</p>
                            <div className="brand_text"><span className="font_18_b">파리바게뜨</span></div>
                            <div className="date_text"><span className="font_18_b">2022.06.24</span></div>
                            <div className="view_more">
                                <a target="_blank" href="https://www.naver.com/">view more</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default News_box1