// 나라별 카드 박스

import React from 'react'

import './Global_box4.css';

function Global_box4() {
  return (
    <section id="Global_box4">
        <div className="container">
            <h1 className="blind">각 나라별 카드</h1>
            <div className="spc_global_card">
                <ul className="card_ul">
                    <li className="card card_01">
                        <p className="font_50">중국</p>
                    </li>
                    <li className="card card_02">
                        <p className="font_50">미주</p>
                    </li>
                    <li className="card card_03">
                        <p className="font_50">동남아시아</p>
                    </li>
                    <li className="card card_04">
                        <p className="font_50">프랑스</p>
                    </li>
                </ul>
            </div>
            
        </div>
    </section>
  )
}

export default Global_box4