import React from 'react'

import './FooterBox.css';

function FooterBox() {
  return (
    <footer id='footer_box'>
      <div className='main_footer_wrap_01'>
                <div className="main_footer_icon">
                    <ul>
                        <li className="prev_button">
                            <div className="card_image_01"><span className="blind">prev 버튼</span></div>
                        </li>
                        <li className="icon_01">
                            <div className="card_image_02"><span className="blind">SPC SAMLIP</span></div>
                        </li>
                        <li className="icon_02">
                            <div className="card_image_03"><span className="blind">SPC PACK</span></div>
                        </li>
                        <li className="icon_03">
                            <div className="card_image_04"><span className="blind">SPC LOGISTICS</span></div>
                        </li>
                        <li className="icon_04">
                            <div className="card_image_05"><span className="blind">SPC FPS</span></div>
                        </li>
                        <li className="icon_01">
                            <div className="card_image_05"><span className="blind">SPC SAMLIP</span></div>
                        </li>
                        <li className="next_button">
                            <div className="card_image_05"><span className="blind">next 버튼</span></div>
                        </li>
                    </ul>
                </div>
      </div>
      <div className="main_footer_wrap_02">
                <div className="main_footer_logo">
                    <h1>
                        <a href="#">
                            <div className="footer_logo"></div>
                        </a>
                    </h1>
                </div>
                <div className="main_footer_info">
                    <ul>
                        <li className="font_18_b">개인정보처리방침</li>
                        <li className="font_18_b">이메일수집 거부</li>
                        <li className="font_18_b">거래희망사전등록</li>
                        <li className="font_18_b">오시는길</li>
                        <li className="font_18_b">공지사항</li>
                    </ul>
                    <address className="font_18">서울시 서초구 양재동 남부순환로 2620(양재동 11-149)SPC그룹
                            <br/>
                            Copyright SPC All rights reserverd.
                    </address>
                </div>
                <div className="main_footer_icon_wrap">
                    <ul>
                        <li>
                            <span className="blind">happy point</span>
                            <div className="icon_image"></div>
                            <div className="icon_text font_18">happypoint</div>
                        </li>
                        <li>
                            <span className="blind">instagram</span>
                            <div className="icon_text font_18">instagram</div>
                        </li>
                        <li>
                            <span className="blind">facebook</span>
                            <div className="icon_text_facebook font_18">facebook</div>
                        </li>
                        <li>
                            <span className="blind">youtube</span>
                            <div className="icon_text font_18">youtube</div>
                        </li>
                    </ul>
                </div>
      </div>
      <div className="main_footer_wrap_03">
                <div className="main_family_site">
                    <p>family site</p>
                    <div className="top_arrow"></div>
                </div>
      </div>
    </footer>
  )
}

export default FooterBox