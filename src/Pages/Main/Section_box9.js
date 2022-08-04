// MAINPAGE -> SNS 박스
import View_left from '../../Component/Button/View_left';
import View_right from '../../Component/Button/View_right';
import View_all from '../../Component/Button/View_all';

import './Section_box9.css';

function Section_box9() {
    return (
        <section id="section_box9">
            <h1 className="blind">section_box9</h1>
            <div className="container">
                <div className="main_sns_wrap_01">
                    <div className="main_sns_text">
                        <h2>sns</h2>
                        <p>푸드 프렌트와 레시피, 다양한 이벤트를 만나보세요.</p>
                    </div>
                    <div className="main_sns_view">
                        <View_left />
                        <View_right />
                        <View_all />
                    </div>
                </div>
                <div className="main_sns_wrap_02">
                    <div className="main_sns_card">
                        <ul>
                            <li className="card">
                                <div className="outline">
                                    <div className="card_image_01"><span className="blind">이미지</span></div>
                                </div>
                            </li>
                            <li className="card">
                                <div className="outline">
                                    <div className="card_image_02"><span className="blind">이미지</span></div>
                                </div>
                            </li>
                            <li className="card">
                                <div className="outline">
                                    <div className="card_image_03"><span className="blind">이미지</span></div>
                                </div>
                            </li>
                            <li className="card">
                                <div className="outline">
                                    <div className="card_image_04"><span className="blind">이미지</span></div>
                                </div>
                            </li>
                            <li className="card">
                                <div className="outline">
                                    <div className="card_image_05"><span className="blind">이미지</span></div>
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