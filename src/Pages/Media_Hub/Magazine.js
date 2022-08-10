import React from 'react'
import Media_hub_box from '../../Component/Media_Hub/Media_hub_box/Media_hub_box';
import Tab_menu_box from '../../Component/Media_Hub/Tab_menu_box/Tab_menu_box';
import Magazine_box1 from './Magazine/Magazine_box1';
import Magazine_box2 from './Magazine/Magazine_box2';
import Magazine_box3 from './Magazine/Magazine_box3';

function Magazine() {
  return (
    <div>
      <Media_hub_box/>
      <Tab_menu_box index={2}/>
      <Magazine_box1/>
      <Magazine_box2/>
      <Magazine_box3/>
    </div>
  )
}

export default Magazine