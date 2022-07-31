import React from 'react';
import {Routes as RoutesWrap, Route} from 'react-router-dom';
import Main from '../../Pages/Main';
import Ceo from '../../Pages/SPC_Group/Ceo';


function Contents() {
    const pageList = [
        {link:'/', page:<Main/>},
        {link:'home', page:<Main/>},
        {link:'spc_group/ceo', page:<Ceo/>}

    ]

  return (
    <main className='content_area'>
        <h2>Contents</h2>
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