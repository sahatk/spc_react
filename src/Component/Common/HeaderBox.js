import React from 'react'
import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';
import ContainerApp from '../ContainerApp'


import './HeaderBox.css';

function HeaderBox() {
  const menuList = [
    { id: uuid(), link: 'SPC_Group/Ceo', text: 'spc_group' },
    { id: uuid(), link: 'Business/Global', text: 'BUSINESS' },
    { id: uuid(), link: 'Media_Hub/FamilyChannel', text: 'MEDIA HUB' },
    { id: uuid(), link: '#', text: 'ESG' },
    { id: uuid(), link: '#', text: 'CAREERS' },
    { id: uuid(), link: '#', text: 'CONTACT' },
  ];

  const subMenuList = [
    [
      { id: uuid(), link: 'SPC_Group/Ceo', text: 'CEO 인사말' },
      { id: uuid(), link: 'SPC_Group/Spc_way', text: 'SPC WAY' },
      { id: uuid(), link: '#', text: '연혁' },
      { id: uuid(), link: '#', text: 'CI' }
    ],
    [
      { id: uuid(), link: 'Business/Global', text: '글로벌' },
      { id: uuid(), link: 'Business/Subsidiary', text: '계열사' },
      { id: uuid(), link: '#', text: '브랜드' },
      { id: uuid(), link: '#', text: 'r&d' }
    ],
    [
      { id: uuid(), link: 'Media_Hub/FamilyChannel', text: '패밀리채널' },
      { id: uuid(), link: 'Media_Hub/News', text: '뉴스' },
      { id: uuid(), link: 'Media_Hub/Magazine', text: 'SPC매거진' },
      { id: uuid(), link: 'Media_Hub/SNS', text: 'SNS' },
      { id: uuid(), link: 'Media_Hub/Youtube', text: '유튜브' },
      { id: uuid(), link: 'Media_Hub/CF', text: 'CF' }
    ],
    [
      { id: uuid(), link: '#', text: '인재채용' },
      { id: uuid(), link: '#', text: '인재양성' }
    ],
    [
      { id: uuid(), link: '#', text: '창업정보' },
      { id: uuid(), link: '#', text: '오시는길' }
    ]
  ];

  // const prevScrollpos = window.pageYOffset;
  // window.onscroll = headerbarToggle;
  // function headerbarToggle() {
  //   let style1 = `color:black;`;
  //   let style2 = 'color:white;';
  //   let global_white = `background-image:url('img/main_img/header_box/global_icon.png')`;
  //   let global_black = `background-image:url('img/main_img/header_box/global_icon_black.png')`;
  //   const headerBox = document.querySelector("#header_box");
  //   const headerNavigation = headerBox.querySelector(".header_nav");
  //   const headerUl = headerNavigation.querySelector(".main_menu");
  //   const headerLi = headerUl.querySelectorAll(".main_li");
  //   const currentScrollpos = window.pageYOffset;
  //   if (prevScrollpos < currentScrollpos) {
  //     headerBox.style.backgroundColor = 'white';
  //     headerLi.forEach(function (el) {
  //       el.style = style1;
  //     });
  //     headerLi[6].style = global_black;
  //   } else {
  //     headerBox.style.backgroundColor = 'transparent';
  //     headerLi.forEach(el => {
  //       el.style = style2;
  //     });
  //     headerLi[6].style = global_white;
  //   }
  // }

  {
    const prevScrollpos = window.pageYOffset;
    window.onscroll = headerbarToggle;
    function headerbarToggle() {
      let style1 = `color:black;`;
      let style2 = 'color:white;';
      let global_white = `background-image:url('img/main_img/header_box/global_icon_white.png')`;
      let global_black = `background-image:url('img/main_img/header_box/global_icon_black.png')`;
      let logo_white = `background-image:url('img/main_img/header_box/gnb_logo_white.png')`;
      let logo_gray = `background-image:url('img/main_img/header_box/gnb_logo_gray.png')`;
      const headerBox = document.querySelector("#header_box");
      const logo = document.querySelector(".logo_img");
      const headerNavigation = headerBox.querySelector(".header_nav");
      const headerUl = headerNavigation.querySelector(".main_menu");
      const headerLi = headerUl.querySelectorAll(".main_li");
      const currentScrollpos = window.pageYOffset;
      if (prevScrollpos < currentScrollpos) {
        headerBox.style.backgroundColor = 'white';
        headerLi.forEach(function (el) {
          el.style = style1;
        });
        headerLi[5].style = global_black;
        logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_gray.png')`;
    
        headerBox.addEventListener('mouseover', function () {
          headerLi[5].style = global_black;
        });
    
      } else {
        headerBox.style.backgroundColor = 'transparent';
        headerLi.forEach(el => {
          el.style = style2;
        });
        headerLi[5].style = global_white;
        logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_white.png')`;
      }
    
        /*스크롤 0 일떄 headerbox 오버시 로고 이미지 변경 */
      if (currentScrollpos == 0) {
        headerBox.addEventListener('mouseover', function () {
          logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_gray.png')`;
          headerLi[5].style = global_black;
        });
    
        headerBox.addEventListener('mouseleave', function(){
          logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_white.png')`;
          headerLi[5].style = global_white;
        });
      } else {
        headerBox.addEventListener('mouseover', function () {
          logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_gray.png')`;
          headerLi[5].style = global_black;
        });
    
        headerBox.addEventListener('mouseleave', function(){
          logo.style.backgroundImage = `url('img/main_img/header_box/gnb_logo_gray.png')`;
          headerLi[5].style = global_black;
        });
    
      }
    }
  }



  return (
    <header id='header_box'>
      <ContainerApp>

        <NavLink to='/' >
          <h1 className="logo_img">
            <span className="blind">spc</span>
          </h1>
        </NavLink>

        <nav className="header_nav">
          <h2 className='blind'>navigation</h2>
          <div className="menu_hover_box"></div>
          <ul className="main_menu">
              <li className='main_li'>
                  <NavLink to={menuList[0].link}>
                    {menuList[0].text}
                  </NavLink>
                  <div className='sub_menu_box'>
                    <ul className='sub_menu sub_menu_01'>
                      {
                        subMenuList[0].map(
                          list =>
                          <li key={list.id}>
                            <NavLink to={list.link}>
                              {list.text}
                            </NavLink>
                          </li>
                        )
                      }
                    </ul>
                  </div>
              </li>
              <li className='main_li'>
                  <NavLink to={menuList[1].link}>
                    {menuList[1].text}
                  </NavLink>
                  <div className='sub_menu_box'>
                    <ul className='sub_menu sub_menu_01'>
                      {
                        subMenuList[1].map(
                          list =>
                          <li key={list.id}>
                            <NavLink to={list.link}>
                              {list.text}
                            </NavLink>
                          </li>
                        )
                      }
                    </ul>
                  </div>
              </li>
              <li className='main_li'>
                  <NavLink to={menuList[2].link}>
                    {menuList[2].text}
                  </NavLink>
                  <div className='sub_menu_box'>
                    <ul className='sub_menu sub_menu_01'>
                      {
                        subMenuList[2].map(
                          list =>
                          <li key={list.id}>
                            <NavLink to={list.link}>
                              {list.text}
                            </NavLink>
                          </li>
                        )
                      }
                    </ul>
                  </div>
              </li>
              <li className='main_li'>
                  <NavLink to={menuList[3].link}>
                    {menuList[3].text}
                  </NavLink>
                  <div className='sub_menu_box'>
                    <ul className='sub_menu sub_menu_01'>
                      {
                        subMenuList[3].map(
                          list =>
                          <li key={list.id}>
                            <NavLink to={list.link}>
                              {list.text}
                            </NavLink>
                          </li>
                        )
                      }
                    </ul>
                  </div>
              </li>
              <li className='main_li'>
                  <NavLink to={menuList[4].link}>
                    {menuList[4].text}
                  </NavLink>
                  <div className='sub_menu_box'>
                    <ul className='sub_menu sub_menu_01'>
                      {
                        subMenuList[4].map(
                          list =>
                          <li key={list.id}>
                            <NavLink to={list.link}>
                              {list.text}
                            </NavLink>
                          </li>
                        )
                      }
                    </ul>
                  </div>
              </li>
              <li className="main_li"><span className="blind">language</span></li>

            {/* <li className="main_li">
              <a href="pages/spc_group/spc_ceo.html">spc group</a>
              <div className="sub_menu_box">
                <ul className="sub_menu sub_menu_01">
                  <li><a href="pages/spc_group/spc_ceo.html" >ceo 인사말</a></li>
                  <li><a href="pages/spc_group/spc_way.html" >spc way</a></li>
                  <li><a href="#" target="_blank">연혁</a></li>
                  <li><a href="#" target="_blank">ci</a></li>
                </ul>
              </div>
            </li>
            <li className="main_li">
              <a href="pages/business/spc_global.html">business</a>
              <div className="sub_menu_box">
                <ul className="sub_menu sub_menu_01">
                  <li><a href="pages/business/spc_global.html">글로벌</a></li>
                  <li><a href="pages/business/spc_subsidiary.html">계열사</a></li>
                  <li><a href="#" target="_blank">브랜드</a></li>
                  <li><a href="#" target="_blank">r&d</a></li>
                </ul>
              </div>
            </li>
            <li className="main_li">
              <a href="pages/media_hub/spc_familychannel.html">media hub</a>
              <div className="sub_menu_box">
                <ul className="sub_menu sub_menu_01">
                  <li><a href="pages/media_hub/spc_familychannel.html">패밀리채널</a></li>
                  <li><a href="pages/media_hub/spc_news.html">뉴스</a></li>
                  <li><a href="pages/media_hub/spc_magazine.html">spc매거진</a></li>
                  <li><a href="pages/media_hub/spc_sns.html">sns</a></li>
                  <li><a href="pages/media_hub/spc_youtube.html" target="_blank">유튜브</a></li>
                  <li><a href="pages/media_hub/spc_cf.html" target="_blank">cf</a></li>
                </ul>
              </div>
            </li>
            <li className="main_li">
              <a href="#">esg</a>
              <div className="sub_menu_box">
                <ul className="sub_menu sub_menu_01">
                  <li><a href="#" target="_blank">spc 행복한재단</a></li>
                  <li><a href="#" target="_blank">사회공헌 소개</a></li>
                  <li><a href="#" target="_blank">사회공헌 소식</a></li>
                  <li><a href="#" target="_blank">정도경영</a></li>
                </ul>
              </div>
            </li>
            <li className="main_li">
              <a href="#">careers</a>
              <div className="sub_menu_box">
                <ul className="sub_menu sub_menu_01">
                  <li><a href="#" target="_blank">인재채용</a></li>
                  <li><a href="#" target="_blank">인재양성</a></li>
                </ul>
              </div>
            </li>
            <li className="main_li">
              <a href="#">contact</a>
              <div className="sub_menu_box">
                <ul className="sub_menu sub_menu_01">
                  <li><a href="#">창업정보</a></li>
                  <li><a href="#">오시는길</a></li>
                </ul>
              </div>
            </li>
            <li className="main_li"><span className="blind">language</span></li> */}
          </ul>
        </nav>
      </ContainerApp>
    </header>
  )
}

export default HeaderBox