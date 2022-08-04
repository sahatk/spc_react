import React from 'react'

import './FooterBox.css';

function FooterBox() {
  return (
    <footer id='footer_box'>
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
                        <div className="icon_image_box">
                            <div className="happypoint_icon icon"></div>
                        </div>
                        <div className="icon_text">
                            <p className="font_18">happypoint</p>
                        </div>
                    </li>
                    <li>
                        <span className="blind">instagram</span>
                        <div className="icon_image_box">
                            <div className="icon instagram_icon ">
                            </div>
                        </div>
                        <div className="icon_text">
                            <p className="font_18">instagram</p>
                        </div>
                    </li>
                    <li>
                        <span className="blind">facebook</span>
                        <div className="icon_image_box">
                            <div className="facebook_icon icon"></div>
                        </div>
                        <div className="icon_text">
                            <p className="font_18">facebook</p>
                        </div>
                    </li>
                    <li>
                        <span className="blind">youtube</span>
                        <div className="icon_image_box">
                            <div className="youtube_icon icon"></div>
                        </div>
                        <div className="icon_text">
                            <p className="font_18">youtube</p>
                        </div>
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