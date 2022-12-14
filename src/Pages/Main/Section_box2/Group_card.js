import React, {useState} from 'react';




function Group_card(props) {

    const [display, SetDisplay] = useState(null);

    const handlerOver = () => display === 'none' ? SetDisplay(null) : SetDisplay('none');
    const handlerOut = () => display === 'none' ? SetDisplay(null) : SetDisplay('none');
// GroupData.map((data,index)=>{
    
// })

    return (
        <li className="card"  
        onMouseEnter={handlerOver} 
        onMouseLeave={handlerOut} 
        style={display === 'none' ? {backgroundImage:`url(${process.env.PUBLIC_URL}img/main_img/section_box2/${props.img}_hover.jpg)`} : null}
        // onMouseOut={handlerOut}
        >
            <div className="outline">
                <div className="card_title">{display === 'none' ? null : props.title }</div>
                <div className="card_image" 
                    style={display === 'none' ? null : {backgroundImage:`url(${process.env.PUBLIC_URL}img/main_img/section_box2/${props.img}.png)`}}>
                    <span className="blind">이미지</span>
                </div>
                <div className="card_text">
                    <p>{display === 'none' ? null : props.text}</p>
                </div>
            </div>
        </li>
    )
}

export default Group_card