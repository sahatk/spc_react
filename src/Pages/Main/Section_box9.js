// MAINPAGE -> SNS 박스
import View_left from '../../Component/View_left';
import View_right from '../../Component/View_right';
import View_all from '../../Component/View_all';

import './Section_box9.css';

function Section_box9() {
    return (
        <section id="section_box9">
            <h1 class="blind">section_box9</h1>
            <div class="container">
                <div class="main_sns_wrap_01">
                    <div class="main_sns_text">
                        <h2>sns</h2>
                        <p>푸드 프렌트와 레시피, 다양한 이벤트를 만나보세요.</p>
                    </div>
                    <div class="main_sns_view">
                        <View_left />
                        <View_right />
                        <View_all />
                    </div>
                </div>
                <div class="main_sns_wrap_02">
                    <div class="main_sns_card">
                        <ul>
                            <li class="card">
                                <div class="outline">
                                    <div class="card_image_01"><span class="blind">이미지</span></div>
                                </div>
                            </li>
                            <li class="card">
                                <div class="outline">
                                    <div class="card_image_02"><span class="blind">이미지</span></div>
                                </div>
                            </li>
                            <li class="card">
                                <div class="outline">
                                    <div class="card_image_03"><span class="blind">이미지</span></div>
                                </div>
                            </li>
                            <li class="card">
                                <div class="outline">
                                    <div class="card_image_04"><span class="blind">이미지</span></div>
                                </div>
                            </li>
                            <li class="card">
                                <div class="outline">
                                    <div class="card_image_05"><span class="blind">이미지</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_box9