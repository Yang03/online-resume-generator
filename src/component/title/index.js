import React from 'react'

import './index.scss'

export default function Title({ icon, text }) {
  return (
    <div className="title">
      <div className="icon">
        <img src={icon} />
      </div>
      {text}
    </div>
  )
}
