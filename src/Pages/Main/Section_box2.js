// MAINPAGE -> SPC GROUP 박스

import './Section_box2.css';

function Section_box2() {
  return (
    <section id='section_box2'>
        <h1 class="blind">section_box2</h1>
        <div class="container">
            <div class="main_group_text">
                    <h2>spc group</h2>
                    <p>spc그룹은 언제나 고객의 행복을 향합니다.</p>
            </div>
            <div class="main_group_card">
                <ul>
                    <li class="card">
                        <div class="outline">
                                <div class="card_title_01">spc way</div>
                                <div class="card_image_01"><span class="blind">이미지</span></div>
                                <div class="card_text">
                                    <p>최고의 품질과 <br/> 고객중심 창의적 도전으로 <br/> 세상을 행복하게 합니다.</p>
                                </div>
                        </div>
                    </li>
                    <li class="card">
                        <div class="outline">
                                <div class="card_title_02">global spc</div>
                                <div class="card_image_02"><span class="blind">이미지</span></div>
                                <div class="card_text">
                                    <p>국경을 초월하여 행복의 맛을 <br/> 더 넓은 세상에 전하고 있습니다.</p> 
                                </div>
                        </div>
                    </li>
                    <li class="card">
                        <div class="outline">
                                <div class="card_title_03">spc history</div>
                                <div class="card_image_03"><span class="blind">이미지</span></div>
                                <div class="card_text">
                                    <p>spc그룹은 1945년 이래 <br/> 고객과 함께 해온 <br/> 종합식품기업입니다.</p>
                                </div>
                        </div>
                    </li>
                    <li class="card">
                        <div class="outline">
                                <div class="card_title_04">spc 정도경영</div>
                                <div class="card_image_04"><span class="blind">이미지</span></div>
                                <div class="card_text">
                                    <p>spc 전 임직원은 공정하고 <br/> 투명한기업 경영을 위해 <br/> 최선의 노력을 다하고 있습니다.</p>
                                </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Section_box2