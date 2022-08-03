// MAINPAGE -> SPC BRAND 박스

import View_all from '../../Component/Button/View_all';
import uuid from 'react-uuid';

import './Section_box3.css';
import Tab_menu_li from './Section_box3/Tab_menu_li';

function Section_box3() {

    const tabMenuList = [
        {key:uuid(), id:0, image:'bread_icon.png', text:'베이커리/디저트'},
        {key:uuid(), id:1, image:'cafe_icon.png', text:'외식/다이닝'},
        {key:uuid(), id:2, image:'dinner_icon.png', text:'카페/음료'},
        {key:uuid(), id:3, image:'service_icon.png', text:'유통/서비스'}
    ];

  return (
    <section id="section_box3">
        <h1 className="blind">section_box3</h1>
        <div className="container">
            <div className="main_brand_wrap_01">
                <div className="main_brand_text">
                    <h2>spc brand</h2>
                    <p>spc그룹의 다양한 브랜드를 만나보세요.</p>
                </div>
                <div className="main_brand_tab">
                    <ul>
                        {
                            tabMenuList.map((data,index) =>
                                <Tab_menu_li key={data.key} id={data.id} img={data.image} text={data.text} index={index}/>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="main_brand_wrap_02">
                <div className="prev_button"></div>
                <div className="main_brand_card">
                    <ul>
                        <li className="card">
                            <div className="card_image_01"><span className="blind">파리바게트 image</span></div>
                        </li>
                        <li className="card">
                            <div className="card_image_02"><span className="blind">베스킨라빈스 image</span></div>
                        </li>
                        <li className="card">
                            <div className="card_image_03"><span className="blind">던킨 image</span></div>
                        </li>
                        <li className="card">
                            <div className="card_image_04"><span className="blind">삽립 image</span></div>
                        </li>
                        <li className="card">
                            <div className="card_image_05"><span className="blind">파리 크로아상 image</span></div>
                        </li>
                    </ul>
                </div>
                <div className="next_button"></div>
            </div>
            <div className="main_brand_wrap_03">
                <View_all />
            </div>
        </div>
    </section>
  )
}

export default Section_box3