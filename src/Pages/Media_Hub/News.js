import React from 'react'
import Media_hub_box from '../../Component/Media_Hub/Media_hub_box/Media_hub_box';
import Tab_menu_box from '../../Component/Media_Hub/Tab_menu_box/Tab_menu_box';
import News_box1 from './News/News_box1';
import News_box2 from './News/News_box2';

function News() {
  return (
    <div>
      <Media_hub_box/>
      <Tab_menu_box/>
      <News_box1/>
      <News_box2/>
    </div>
  )
}

export default News