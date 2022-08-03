import React, {useState} from 'react';




function Group_card(props) {

    const [display, SetDisplay] = useState(null);

    const handlerOver = () => display === 'none' ? SetDisplay(null) : SetDisplay('none');
    const handlerOut = () => display === 'none' ? SetDisplay(null) : SetDisplay('none');
// GroupData.map((data,index)=>{
    
// })

    return (
        <li class="card"  onMouseEnter={handlerOver} onMouseLeave={handlerOut} style={display === 'none' ? {backgroundImage:`url(${props.hoverImg})`} : null}
        // onMouseOut={handlerOut}
        >
            <div class="outline">
                <div className="card_title">{display === 'none' ? null : props.title }</div>
                <div className="card_image" 
                    style={display === 'none' ? null : {backgroundImage:`url(${props.img})` }}>
                    <span class="blind">이미지</span>
                </div>
                <div class="card_text">
                    <p>{display === 'none' ? null : props.text}</p>
                </div>
            </div>
        </li>
    )
}

export default Group_card