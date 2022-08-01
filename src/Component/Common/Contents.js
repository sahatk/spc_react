import React from 'react';
import {Routes as RoutesWrap, Route} from 'react-router-dom';
import Main from '../../Pages/Main';
import Ceo from '../../Pages/SPC_Group/Ceo';
import Spc_way from '../../Pages/SPC_Group/Spc_way';
import Global from '../../Pages/Business/Global';
import Subsidiary from '../../Pages/Business/Subsidiary';
import FamilyChannel from '../../Pages/Media_Hub/FamilyChannel';
import Magazine from '../../Pages/Media_Hub/Magazine';
import News from '../../Pages/Media_Hub/News';
import SNS from '../../Pages/Media_Hub/SNS';
import Youtube from '../../Pages/Media_Hub/Youtube';
import CF from '../../Pages/Media_Hub/CF';


function Contents() {
    const pageList = [
        {link:'/', page:<Main/>},
        {link:'home', page:<Main/>},
        {link:'SPC_Group/Ceo', page:<Ceo/>},
        {link:'SPC_Group/Spc_way', page:<Spc_way/>},
        {link:'Business/Global', page:<Global/>},
        {link:'Business/Subsidiary', page:<Subsidiary/>},
        {link:'Media_Hub/FamilyChannel', page:<FamilyChannel/>},
        {link:'Media_Hub/Magazine', page:<Magazine/>},
        {link:'Media_Hub/News', page:<News/>},
        {link:'Media_Hub/SNS', page:<SNS/>},
        {link:'Media_Hub/Youtube', page:<Youtube/>},
        {link:'Media_Hub/CF', page:<CF/>},
        

    ]

  return (
    <main className='content_area'>
        <RoutesWrap>
            {
                pageList.map((component, index)=>
                    <Route key={index} path={component.link} element={component.page}/>
                )
            }
        </RoutesWrap>
    </main>
  )
}

export default Contents