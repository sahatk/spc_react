import React from 'react'
// 카테고리 박스

import './Category_box.css';

function Category_box() {
  return (
    <div id="category_box">
        <div className="category_title font_50">SPC 계열사</div>
        <div className="category_menu font_20">
            <ul className="category_ul">
                <li className="category_li_title">
                    <a href="#" className="color_sky">all subsidiary</a>
                </li>
                <li className="category_li">
                    <a href="#">식품</a>
                </li>
                <li className="category_li">
                    <a href="#">원료</a>
                </li>
                <li className="category_li">
                    <a href="#">IT/서비스</a>
                </li>
                <li className="category_li">
                    <a href="#">유통</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Category_box