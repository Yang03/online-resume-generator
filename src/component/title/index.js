import React from 'react'
import Icon from '../icon'

import './index.scss'

export default function Title({ icon, text }) {
  return (
    <div className="title">
      <div className="icon">
        {/* <img src={icon} /> */}
        <Icon type={icon} />
      </div>
      {text}
    </div>
  )
}
