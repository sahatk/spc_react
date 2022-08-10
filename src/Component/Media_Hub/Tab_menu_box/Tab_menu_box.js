import uuid from "react-uuid";
import {Routes as RoutesWrap, Route, Link} from 'react-router-dom';


import FamilyChannel from "../../../Pages/Media_Hub/FamilyChannel";
import Magazine from "../../../Pages/Media_Hub/Magazine";
import News from "../../../Pages/Media_Hub/News";
import SNS from "../../../Pages/Media_Hub/SNS";
import Youtube from "../../../Pages/Media_Hub/Youtube";
import CF from "../../../Pages/Media_Hub/CF";


import "./Tab_menu_box.css";

function Tab_menu_box(props) {
  const subMenuList = [
    { id: uuid(), link:"/Media_Hub/FamilyChannel", text: '패밀리채널', page:<FamilyChannel/>},
    { id: uuid(), link:"/Media_Hub/News", text: '뉴스' , page:<News/>},
    { id: uuid(), link:"/Media_Hub/Magazine", text: 'SPC매거진' , page:<Magazine/>},
    { id: uuid(), link:"/Media_Hub/SNS", text: 'SNS' , page:<SNS/>},
    { id: uuid(), link:"/Media_Hub/Youtube", text: '유튜브' , page:<Youtube/>},
    { id: uuid(), link:"/Media_Hub/CF", text: 'CF' , page:<CF/>}
  ];

  return (
    <section id="tab_menu_box">
      <h1 className="blind">TAB MENU BOX</h1>
      <div className="container">
        <ul className="tab_menu_ul">
          {/* <li className="tab_menu_li"><a href="/FamilyChannel" className="font_20">패밀리채널</a></li>
                <li className="tab_menu_li active"><a href="/Magazine" className="font_20">뉴스</a></li>
                <li className="tab_menu_li"><a href="/News" className="font_20">spc매거진</a></li>
                <li className="tab_menu_li"><a href="/SNS" className="font_20">sns</a></li>
                <li className="tab_menu_li"><a href="/Youtube" className="font_20">유튜브</a></li>
                <li className="tab_menu_li"><a href="/CF" className="font_20">cf</a></li> */}
           {
            subMenuList.map(
              (list,index) =>
              <li className={"tab_menu_li " + (index === props.index ? "active" : null)} key={list.id}>
                <Link className="font_20" to={list.link}>
                  {list.text}
                </Link>
              </li>
            )
           }    
           <RoutesWrap>
            {
                subMenuList.map((component, index)=>
                    <Route key={index} path={component.link} element={component.page}/>
                )
            }
          </RoutesWrap>     
        </ul>
      </div>
    </section>
  );
}

export default Tab_menu_box;
