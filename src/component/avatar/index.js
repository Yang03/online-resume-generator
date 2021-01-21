import React from 'react'
import appContext from '../../appContext'

import './index.scss'

export default function Avatar({ data = {} }) {

  const {dispatch, modules} = React.useContext(appContext)
  console.log(dispatch, modules)
  return (<div className="avatar">
      <img src={data.image} />
    </div>)
}
