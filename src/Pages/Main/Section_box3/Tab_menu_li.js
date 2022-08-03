import React, { useState } from 'react'

function Tab_menu_li(props) {



    const [block, SetBlock] = useState(null);
    const [none, SetNone] = useState('none');

    const handlerClick = e =>{
        e && e.preventDefault();


    }


    
    return (
        <li key={props.id} onClick={handlerClick}>
            <button type="button">
                <div className="tab_card">
                    <div className="tab_icon" style={{backgroundImage:`url(${process.env.PUBLIC_URL}img/main_img/section_box3/main_tab_wrap/${props.img})`}}>
                        <span className="blind">{props.text} 아이콘</span>
                    </div>
                    <p>{props.text}</p>
                </div>
            </button>
        </li>
    )
}

export default Tab_menu_li