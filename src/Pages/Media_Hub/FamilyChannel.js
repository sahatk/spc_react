import React from 'react'
import Media_hub_box from '../../Component/Media_Hub/Media_hub_box/Media_hub_box';
import Tab_menu_box from '../../Component/Media_Hub/Tab_menu_box/Tab_menu_box';
import FamilyChannel_box1 from './FamilyChannel/FamilyChannel_box1';
import FamilyChannel_box2 from './FamilyChannel/FamilyChannel_box2';
import FamilyChannel_box3 from './FamilyChannel/FamilyChannel_box3';
import FamilyChannel_box4 from './FamilyChannel/FamilyChannel_box4';

function FamilyChannel() {

  return (
    <div>
      <Media_hub_box/>
      <Tab_menu_box index={0}/>
      <FamilyChannel_box1/>
      <FamilyChannel_box2/>
      <FamilyChannel_box3/>
      <FamilyChannel_box4/>
    </div>
  )
}

export default FamilyChannel