// MAINPAGE -> SPC MAGAZINE 박스

import './Section_box7.css';

import View_all from '../../Component/Button/View_all';

function Section_box7() {
  return (
    <section id="section_box7">
        <h1 className="blind">section_box7</h1>
        <div className="container">
            <div className="main_magazine_wrap_01">
                <div className="main_magazine_text">
                    <h2>spc magazine</h2>
                    <p>spc매거진 뉴스레터로 새소식을 접해보세요.</p>
                </div>
                <View_all/>
            </div>
            <div className="main_magazine_wrap_02">
                <div className="main_magazine_card">
                    <ul>
                        <li className="card">
                            <div className="outline">
                                <div className="card_image_01"><span className="blind">spc magazine 이미지1</span></div>
                                <div className="card_text_01">
                                    <b>2022.06.07</b>
                                </div>
                            </div>
                        </li>
                        <li className="card_line_right"></li>
                        <li className="card_line_left"></li>
                        <li className="card">
                            <div className="outline">
                                <div className="card_image_02"><span className="blind">spc magazine 이미지2</span></div>
                                <div className="card_text_01">
                                    <b>2022.03.31</b>
                                </div>
                            </div>
                        </li>
                        <li className="card_line_right"></li>
                        <li className="card_line_left"></li>
                        <li className="card">
                            <div className="outline">
                                <div className="card_image_03"><span className="blind">spc magazine 이미지3</span></div>
                                <div className="card_text_01">
                                    <b>2022.02.28</b>
                                </div>
                            </div>
                        </li>
                        <li className="card_line_right"></li>
                        <li className="card_line_left"></li>
                        <li className="card">
                            <div className="outline">
                                <div className="card_image_04"><span className="blind">spc magazine 이미지4</span></div>
                                <div className="card_text_01">
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