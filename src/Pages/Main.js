import React from 'react'
import ContainerApp from '../Component/ContainerApp';
import Section_box1 from './Main/Section_box1';
import Section_box2 from './Main/Section_box2';
import Section_box3 from './Main/Section_box3';
import Section_box4 from './Main/Section_box4';
import Section_box5 from './Main/Section_box5';
import Section_box6 from './Main/Section_box6';
import Section_box7 from './Main/Section_box7';
import Section_box8 from './Main/Section_box8';
import Section_box9 from './Main/Section_box9';


function Main() {
  return (
    <div>
      {/* Main */}
      <ContainerApp>
        <Section_box1></Section_box1>
      </ContainerApp>

      <ContainerApp>
        <Section_box2></Section_box2>
      </ContainerApp>

      <ContainerApp>
        <Section_box3></Section_box3>
      </ContainerApp>

      <ContainerApp>
        <Section_box4></Section_box4>
      </ContainerApp>

      <ContainerApp>
        <Section_box5></Section_box5>
      </ContainerApp>

      <ContainerApp>
        <Section_box6></Section_box6>
      </ContainerApp>

      <ContainerApp>
        <Section_box7></Section_box7>
      </ContainerApp>

      <ContainerApp>
        <Section_box8></Section_box8>
      </ContainerApp>

      <ContainerApp>
        <Section_box9></Section_box9>
      </ContainerApp>
 
    </div>
  )
}

export default Main