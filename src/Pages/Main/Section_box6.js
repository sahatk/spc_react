// MAINPAGE -> SPC NEWS 박스

import View_all from '../../Component/View_all';
import View_more from '../../Component/View_more';
import View_left from '../../Component/View_left';
import View_right from '../../Component/View_right';


import './Section_box6.css';

function Section_box6() {
  return (
    <section id="section_box6">
        <h1 class="blind">section_box6</h1>
        <div class="container">
            <div class="main_news_wrap_01">
                <div class="main_news_text">
                    <h2>spc news</h2>
                    <p>spc그룹의 최신뉴스를 확인해보세요.</p>
                </div>
                <div class="main_news_view">
                    <View_left/>
                    <View_right/>
                    <View_all/>
                </div>
            </div>
            <div class="main_news_wrap_02">
                <div class="main_news_card">
                    <ul>
                        <li class="card">
                            <div class="outline">
                                <a target="_blank" href="https://www.happyconstore.com/">
                                <div class="card_image_01"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <div class="card_text_wrap_01">
                                        <p>spc그룹 파리바게뜨,말레이시아 진출 "할랄시장 본격 공략"</p>
                                    </div>
                                    <div class="card_text_wrap_02">
                                        <b>2022.06.20</b>
                                        <View_more/>
                                    </div>  
                                </div>
                                </a>
                            </div>
                        </li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_02"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <div class="card_text_wrap_01">
                                        <a target="_blank" href="https://www.happyconstore.com/">
                                            <p>spc그룹 (주)파리크라상, 2022년 제1회 『소비자권익대상』 수상</p>
                                        </a>
                                    </div>
                                    <div class="card_text_wrap_02">
                                        <b>2022.06.10</b>
                                        <View_more/>
                                    </div>
                                    
                                </div>
                            </div>
                        </li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_03"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <div class="card_text_wrap_01">
                                        <a target="_blank" href="https://www.happyconstore.com/">
                                            <p>SPC그룹, 프랑스 샌드위치&샐러드 브랜드 ‘리나스’ 인수</p>
                                        </a>
                                    </div>
                                    <div class="card_text_wrap_02">
                                        <b>2022.06.07</b>
                                        <View_more/>
                                    </div>
                                    
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section_box6