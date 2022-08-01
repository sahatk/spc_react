// MAINPAGE -> SPC 소개글과 배경 슬라이드 박스

import './Section_box1.css';

function Section_box1() {
  return (
    <section id="section_box1">
        <h1 class="blind">section_box1</h1>
        
        <div class="prev_button_wrap">
            <div class="prev_button"></div>
            <p>prev</p>
        </div>
        <div class="next_button_wrap">
            <div class="next_button"></div>
            <p>next</p>
        </div>
        <div class="indicators">
            <ul>
                <li class="action"><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
        </div>
        <div class="view_area">
            <ul>
                <li class="main_view_01"></li>
                <li class="main_view_02"></li>
                <li class="main_view_03"></li>
                <li class="main_view_04"></li>
            </ul>
        </div>
        <div class="container">
            <div class="main_title_text">
                <p>Happy Sincerity</p>
                <div class="solid"></div>
                <p>spc그룹과 함께</p>
                <p>세상은 더 행복해집니다.</p>
            </div>
        </div>

        <nav class="navigation">
            <h2>sns navigation</h2>
            <ul>
                <li><span class="blind">happy point</span></li>
                <li><span class="blind">instagram</span></li>
                <li><span class="blind">facebook</span></li>
                <li><span class="blind">youtube</span></li>
            </ul>
        </nav>
        
    </section>
    
  )
}

export default Section_box1