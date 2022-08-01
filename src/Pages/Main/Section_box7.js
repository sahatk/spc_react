// MAINPAGE -> SPC MAGAZINE 박스

import './Section_box7.css';

import View_all from '../../Component/View_all';

function Section_box7() {
  return (
    <section id="section_box7">
        <h1 class="blind">section_box7</h1>
        <div class="container">
            <div class="main_magazine_wrap_01">
                <div class="main_magazine_text">
                    <h2>spc magazine</h2>
                    <p>spc매거진 뉴스레터로 새소식을 접해보세요.</p>
                </div>
                <View_all/>
            </div>
            <div class="main_magazine_wrap_02">
                <div class="main_magazine_card">
                    <ul>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_01"><span class="blind">spc magazine 이미지1</span></div>
                                <div class="card_text_01">
                                    <b>2022.06.07</b>
                                </div>
                            </div>
                        </li>
                        <li class="card_line_right"></li>
                        <li class="card_line_left"></li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_02"><span class="blind">spc magazine 이미지2</span></div>
                                <div class="card_text_01">
                                    <b>2022.03.31</b>
                                </div>
                            </div>
                        </li>
                        <li class="card_line_right"></li>
                        <li class="card_line_left"></li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_03"><span class="blind">spc magazine 이미지3</span></div>
                                <div class="card_text_01">
                                    <b>2022.02.28</b>
                                </div>
                            </div>
                        </li>
                        <li class="card_line_right"></li>
                        <li class="card_line_left"></li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_04"><span class="blind">spc magazine 이미지4</span></div>
                                <div class="card_text_01">
                                    <b>2022.01.31</b>
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

export default Section_box7