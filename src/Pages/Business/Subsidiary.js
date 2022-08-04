import React from 'react'
import Category_box from './Subsidiary/Category_box'
import Sky_area from './Subsidiary/Sky_area'
import Subsidiary_box1 from './Subsidiary/Subsidiary_box1'

function Subsidiary() {
  return (
    <div>
      <Sky_area />
      <Category_box/>
      <Subsidiary_box1/>
    </div>
  )
}

export default Subsidiary