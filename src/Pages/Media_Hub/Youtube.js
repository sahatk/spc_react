import React from 'react'
import Media_hub_box from '../../Component/Media_Hub/Media_hub_box/Media_hub_box';
import Tab_menu_box from '../../Component/Media_Hub/Tab_menu_box/Tab_menu_box';
import Youtube_box1 from './Youtube/Youtube_box1';
import Youtube_box2 from './Youtube/Youtube_box2';

function Youtube() {
  return (
    <div>
      <Media_hub_box/>
      <Tab_menu_box index={4}/>
      <Youtube_box1/>
      <Youtube_box2/>
    </div>
  )
}

export default Youtube