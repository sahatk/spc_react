// MAINPAGE -> SPC BRAND 박스

import View_all from '../../Component/View_all';

import './Section_box3.css';

function Section_box3() {
  return (
    <section id="section_box3">
        <h1 class="blind">section_box3</h1>
        <div class="container">
            <div class="main_brand_wrap_01">
                <div class="main_brand_text">
                    <h2>spc brand</h2>
                    <p>spc그룹의 다양한 브랜드를 만나보세요.</p>
                </div>
                <div class="main_brand_tab">
                    <ul>
                        <li>
                            <button type="button">
                                <div class="tab_card">
                                    <div class="tab_icon_00">
                                        <span class="blind">베이커리/디저트 아이콘</span>
                                    </div>
                                    <p class="action">베이커리/디저트</p>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <div class="tab_card">
                                    <div class="tab_icon_01">
                                        <span class="blind">외식/다이닝 아이콘</span>
                                    </div>
                                    <p>외식/다이닝</p>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <div class="tab_card">
                                    <div class="tab_icon_02">
                                        <span class="blind">카페/음료 아이콘</span>
                                    </div>
                                    <p>카페/음료</p>
                                </div>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <div class="tab_card">
                                    <div class="tab_icon_03">
                                        <span class="blind">유통/서비스 아이콘</span>
                                    </div>
                                    <p>유통/서비스</p>
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main_brand_wrap_02">
                <div class="prev_button"></div>
                <div class="main_brand_card">
                    <ul>
                        <li class="card">
                            <div class="card_image_01"><span class="blind">파리바게트 image</span></div>
                        </li>
                        <li class="card">
                            <div class="card_image_02"><span class="blind">베스킨라빈스 image</span></div>
                        </li>
                        <li class="card">
                            <div class="card_image_03"><span class="blind">던킨 image</span></div>
                        </li>
                        <li class="card">
                            <div class="card_image_04"><span class="blind">삽립 image</span></div>
                        </li>
                        <li class="card">
                            <div class="card_image_05"><span class="blind">파리 크로아상 image</span></div>
                        </li>
                    </ul>
                </div>
                <div class="next_button"></div>
            </div>
            <div class="main_brand_wrap_03">
                <View_all />
            </div>
        </div>
    </section>
  )
}

export default Section_box3