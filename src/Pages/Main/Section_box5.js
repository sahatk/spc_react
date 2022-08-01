// MAINPAGE -> SPC HAPPYPOINT 박스
import View_all from '../../Component/View_all';
import Buy from '../../Component/Buy';

import './Section_box5.css';

function Section_box5() {
  return (
    <section id="section_box5">
        <h1 class="blind">section_box5</h1>
        <div class="container">
            <div class="main_happypoint_wrap_01">
                <div class="main_happypoint_text">
                    <h2>spc 해피포인트</h2>
                    <p>해피포인트 app에서 다양한 신제품을 만나보세요.</p>
                </div>
                <View_all/>
            </div>
            <div class="main_happypoint_wrap_02">
                <div class="main_happypoint_card">
                    <ul>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_01"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <a target="_blank" href="https://www.happyconstore.com/">
                                        <p>가나슈 쇼콜라 케이크(조각)</p>
                                    </a>
                                    <Buy></Buy>
                                </div>
                            </div>
                        </li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_02"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <a target="_blank" href="https://www.happyconstore.com/">
                                        <p>달달한 디저트 세트(클래식 치즈 케이크(조각)+아메리카노(시그니처)1잔)</p>
                                    </a>
                                    <Buy></Buy>
                                </div>
                            </div>
                        </li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_03"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <a target="_blank" href="https://www.happyconstore.com/">
                                        <p>엄마는 외계인 케이크</p>
                                    </a>
                                    <Buy></Buy>
                                </div>
                            </div>
                        </li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_04"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <a target="_blank" href="https://www.happyconstore.com/">
                                        <p>기운 센 콘푸로스트 블라스트</p>
                                    </a>
                                    <Buy></Buy>
                                </div>
                            </div>
                        </li>
                        <li class="card">
                            <div class="outline">
                                <div class="card_image_05"><span class="blind">이미지</span></div>
                                <div class="card_text_01">
                                    <a target="_blank" href="https://www.happyconstore.com/">
                                        <p>오레오 쿨라타</p>
                                    </a>
                                    <Buy></Buy>
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

export default Section_box5