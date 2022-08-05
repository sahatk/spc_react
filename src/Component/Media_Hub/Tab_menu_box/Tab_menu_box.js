import React, { useState } from 'react'
import './Tab_menu_box.css';

function Tab_menu_box(props) {


  return (
    <section id="tab_menu_box">
        <h1 className="blind">TAB MENU BOX</h1>
        <div className="container">
            <ul className="tab_menu_ul">
                <li className="tab_menu_li active"><a href="../media_hub/spc_familychannel.html" className="font_20">패밀리채널</a></li>
                <li className="tab_menu_li"><a href="../media_hub/spc_news.html" className="font_20">뉴스</a></li>
                <li className="tab_menu_li"><a href="../media_hub/spc_magazine.html" className="font_20">spc매거진</a></li>
                <li className="tab_menu_li"><a href="../media_hub/spc_sns.html" className="font_20">sns</a></li>
                <li className="tab_menu_li"><a href="../media_hub/spc_youtube.html" className="font_20">유튜브</a></li>
                <li className="tab_menu_li"><a href="../media_hub/spc_cf.html" className="font_20">cf</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Tab_menu_box