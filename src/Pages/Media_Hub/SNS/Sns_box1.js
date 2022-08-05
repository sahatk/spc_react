// SPC그룹 공식 SNS채널 박스

import React from 'react'

import './Sns_box1.css';

function Sns_box1() {
  return (
    <section id="Sns_box1">
        <h1 className="blind">SPC그룹 공식 SNS채널 박스</h1>
        <div className="container">
            <div className="sns_title"><p className="font_50">spc그룹 공식 sns채널</p></div>
            <div className="insta_title">
                <div className="insta_wrap">
                    <div className="insta_icon"><h3 className="blind">인스타그램 로고</h3></div>
                    <p className="font_20">인스타그램</p>
                </div>
            </div>
            <div className="insta_card_box">
                <ul className="insta_card_ul">
                    <li className="insta_card_li">
                        <div className="insta_card">
                            <div className="insta_card_image_01">
                                <h2 className="blind">insta_카드_이미지_01</h2>
                            </div>
                        </div>
                    </li>
                    <li className="insta_card_li">
                        <div className="insta_card">
                            <div className="insta_card_image_02">
                                <h2 className="blind">insta_카드_이미지_02</h2>
                            </div>
                        </div>
                    </li>
                    <li className="insta_card_li">
                        <div className="insta_card">
                            <div className="insta_card_image_03">
                                <h2 className="blind">insta_카드_이미지_03</h2>
                            </div>
                        </div>
                    </li>
                    <li className="insta_card_li">
                        <div className="insta_card">
                            <div className="insta_card_image_04">
                                <h2 className="blind">insta_카드_이미지_04</h2>
                            </div>
                        </div>
                    </li>
                    <li className="insta_card_li">
                        <div className="insta_card">
                            <div className="insta_card_image_05">
                                <h2 className="blind">magazine_카드_이미지_05</h2>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="facebook_title">
                <div className="facebook_wrap">
                    <div className="facebook_icon"><h3 className="blind">페이스북 로고</h3></div>
                    <p className="font_20">페이스북</p>
                </div>
            </div>
            <div className="facebook_card_box">
                <ul className="facebook_card_ul">
                    <li className="facebook_card_li">
                        <div className="facebook_card">
                            <div className="facebook_card_image_01">
                                <h2 className="blind">facebook_카드_이미지_01</h2>
                            </div>
                        </div>
                    </li>
                    <li className="facebook_card_li">
                        <div className="facebook_card">
                            <div className="facebook_card_image_02">
                                <h2 className="blind">facebook_카드_이미지_02</h2>
                            </div>
                        </div>
                    </li>
                    <li className="facebook_card_li">
                        <div className="facebook_card">
                            <div className="facebook_card_image_03">
                                <h2 className="blind">facebook_카드_이미지_03</h2>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Sns_box1