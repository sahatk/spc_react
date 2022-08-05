import React from 'react'

import './News_box1.css';

function News_box1() {
  return (
    <section id="News_box1">
        <h1 class="blind">NEWS Feed BOX</h1>
        <div class="container">
            <div class="newsfeed_title"><p class="font_50">NEWS Feed</p></div>
            <div class="newsfeed_card_box">
                <ul class="newsfeed_card_ul">
                    <li class="newsfeed_card_li">
                        <div class="newsfeed_card_image_01"><h2 class="blind">SPC NEWS Feed 카드 이미지 01</h2></div>
                        <div class="newsfeed_card_text">
                            <p class="font_20">SPC삼립 ‘국산 밀 소비 앞장선다’…국산 밀 베이커리 4종 출시</p>
                            <div class="brand_text"><span class="font_18_b">spc 삼립</span></div>
                            <div class="date_text"><span class="font_18_b">2022.07.14</span></div>
                            <div class="view_more">
                                <a target="_blank" href="https://www.naver.com/">view more</a>
                            </div>
                        </div>
                    </li>
                    <li class="newsfeed_card_li">
                        <div class="newsfeed_card_image_02"><h2 class="blind">SPC NEWS Feed 카드 이미지 02</h2></div>
                        <div class="newsfeed_card_text">
                            <p class="font_20">SPC그룹 허영인 회장, 佛대통령 글로벌기업 초청행사 참석</p>
                            <div class="brand_text"><span class="font_18_b">spc 그룹</span></div>
                            <div class="date_text"><span class="font_18_b">2022.07.12</span></div>
                            <div class="view_more">
                                <a target="_blank" href="https://www.naver.com/">view more</a>
                            </div>
                        </div>
                    </li>
                    <li class="newsfeed_card_li">
                        <div class="newsfeed_card_image_03"><h2 class="blind">SPC NEWS Feed 카드 이미지 03</h2></div>
                        <div class="newsfeed_card_text">
                            <p class="font_20">SPC그룹, 싱가포르 파리바게뜨 래플스시티점 오픈</p>
                            <div class="brand_text"><span class="font_18_b">파리바게뜨</span></div>
                            <div class="date_text"><span class="font_18_b">2022.06.24</span></div>
                            <div class="view_more">
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