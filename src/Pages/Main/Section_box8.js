// MAINPAGE -> YOUTUBE 박스
import View_left from '../../Component/View_left';
import View_right from '../../Component/View_right';
import View_all from '../../Component/View_all';

import './Section_box8.css';



function Section_box8() {
  return (
    <section id="section_box8">
        <h1 class="blind">section_box8</h1>
        <div class="youtube_box_bg"><div class="blind">황토색 유튜브 박스</div></div>
        <div class="container">
            <div class="main_youtube_wrap_01">
                <div class="main_youtube_text">
                    <h2>youtube</h2>
                    <p>spc그룹의 다양한 영상콘텐츠를 즐기세요.</p>
                </div>
            </div>
            <div class="main_youtube_wrap_02">
                <div class="main_youtube_view">
                    <View_all/>
                    <View_right/>
                    <View_left/>
                </div>
            </div>
            <div class="main_youtube_wrap_03">
                <div class="main_youtube_card">
                    <ul>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_01"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <div class="card_text_wrap_01">
                                        <a target="_blank" href="https://www.happyconstore.com/">
                                            <p>spc그룹 파리바게뜨,말레이시아 진출 "할랄시장 본격 공략"</p>
                                        </a>
                                    </div>
                                    <div class="card_text_wrap_02">
                                        <b>2022-04-27</b>
                                    </div>
                                    
                                </div>
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
                                        <b>2022-03-22</b>
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
                                        <b>2022-02-28</b>
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

export default Section_box8