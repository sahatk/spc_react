// MAINPAGE -> SPC GROUP 박스
import React, {useState} from 'react';

import Group_card from './Section_box2/Group_card';
import GroupData from './Section_box2/GroupData';

import './Section_box2.css';

function Section_box2(props) {
  return (
    <section id='section_box2'>
        <h1 className="blind">section_box2</h1>
        <div className="container">
            <div  className='main_group_text'>
                    <h2>spc group</h2>
                    <p>spc그룹은 언제나 고객의 행복을 향합니다.</p>
            </div>
            <div className='main_group_card'>
                <ul>
                    {GroupData.map(data => (
                        <Group_card
                        key={data.primaryKey}
                        title={data.title}
                        img={data.img}
                        text={data.text}
                        />
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Section_box2