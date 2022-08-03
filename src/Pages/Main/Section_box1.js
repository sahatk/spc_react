// MAINPAGE -> SPC 소개글과 배경 슬라이드 박스
import React, {useState} from 'react';


import Buttons from './Section_box1/Buttons';
import Slide_wrapper from './Section_box1/Slide_wrapper';
import Indicators from './Section_box1/Indicators';

import ListData from './Section_box1/ListData';

import './Section_box1.css';

function Section_box1() {

    const total = ListData.length -1;
    const [count, setCount] = useState(0);

    const handlerNextClick = (e) => {
        e && e.preventDefault();
        setCount( count >= total ? 0 : count + 1);
    }; //다음 버튼 클릭했을때 */

    const handlerPrevClick = (e) => {
        e && e.preventDefault();
        setCount( count <= 0 ? total : count - 1);
    }


  return (
    <section id="section_box1">
        <h1 className="blind">section_box1</h1>
        
        <Buttons nextEvent={handlerNextClick} prevEvent={handlerPrevClick}/>
        
        <Indicators
        ListData={ListData}
        count={count}
        total={total}
        setCount={setCount}
        />

        <Slide_wrapper
        ListData={ListData}
        count={count}/>
        
        <div className="container">
            <div className="main_title_text">
                <p>Happy Sincerity</p>
                <div className="solid"></div>
                <p>spc그룹과 함께</p>
                <p>세상은 더 행복해집니다.</p>
            </div>
        </div>

        <nav className="navigation">
            <h2>sns navigation</h2>
            <ul>
                <li><span className="blind">happy point</span></li>
                <li><span className="blind">instagram</span></li>
                <li><span className="blind">facebook</span></li>
                <li><span className="blind">youtube</span></li>
            </ul>
        </nav>
        
    </section>
    
  )
}

export default Section_box1