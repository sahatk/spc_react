import React from 'react'

//경영철학, 비전, 핵심가치 카드 박스

import './Spc_way_box6.css'

function Spc_way_box6() {
  return (
    <section id="Spc_way_box6">
        <div className="container">
            <div className="card_box">
                <ul className="card_ul">
                    <li className="card">
                        <div className="outline">
                            <div className="card_title font_20">경영철학</div>
                            <div className="card_text_01 mb_15"><p className="font_20">최고의 품질과 고객중심,<br/>
                                창의적 도전으로 <span className="color_sky font_20">세상을 행복</span>하게 한다.</p>
                            </div>
                            <div className="card_text_02">
                                <p className="font_18">경영철학은 최고경영자의 신념이자 우리 그룹의 존재 이유입니다.<br/>
                                   SPC그룹은 창의적 도전정신을 바탕으로<br />
                                   맛있고 건강한 제품을 통해 언제나 고객의 행복과 함께 하겠습니다.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="card">
                        <div className="outline">
                            <div className="card_title font_20">비전</div>
                            <div className="card_text_01 mb_40"><p className="font_20">great food company</p>
                            </div>
                            <div className="card_text_02">
                                <p className="font_18">SPC그룹의 비전은 전 세계인에게 존경받고 지속 성장 가능한<br />
                                    경쟁력을 갖춘 글로벌 종합식품기업이 되는 것입니다.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="tree_box">
                <div className="tree_wrap_01">
                    <li className="card">
                        <div className="outline">
                            <div className="card_title font_20">핵심가치</div>
                            <div className="card_text_01 mb_15"><p className="font_20">핵심가치를 지키고 실천할 때 spc그룹이 <br /> 추구하는 <span className="color_sky font_20">행복한 세상</span>이 펼쳐집니다.</p>
                            </div>
                            <div className="card_text_02">
                                <p className="font_18">SPC그룹의 비전은 전 세계인에게 존경받고 지속 성장 가능한<br />
                                    경쟁력을 갖춘 글로벌 종합식품기업이 되는 것입니다.
                                </p>
                            </div>
                        </div>
                    </li>
                </div>
                <div className="tree_arrow_image"><span className="blind">화살표 이미지</span></div>
                <div className="tree_wrap_02">
                    <ul className="card_ul">
                        <li className="card">
                            <div className="outline">
                                <div className="tree_card_title">
                                    <p className="font_20"><span className="color_sky font_24">i</span>ntegrity &nbsp;&nbsp;정직</p>
                                </div>
                                <div className="tree_card_text">
                                    <p className="font_18">우리는 기본에 충실하며 올바르게 행동한다.</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="outline">
                                <div className="tree_card_title">
                                    <p className="font_20"><span className="color_sky font_24">i</span>nnovation &nbsp;&nbsp;혁신</p>
                                </div>
                                <div className="tree_card_text">
                                    <p className="font_18">우리는 변화를 추구하며 열정적으로 도전한다.</p>
                                </div>
                            </div>
                        </li>
                        <li className="card">
                            <div className="outline">
                                <div className="tree_card_title">
                                    <p className="font_20"><span className="color_sky font_24">i</span>ntegration &nbsp;&nbsp;협업</p>
                                </div>
                                <div className="tree_card_text">
                                    <p className="font_18">우리는 다양성을 존중하며 유기적으로 협력한다.</p>
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

export default Spc_way_box6