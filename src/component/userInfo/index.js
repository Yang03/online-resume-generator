import React from 'react'
import Title from '../../component/title'

import icon from '../../../asset/base.svg'

import './index.scss'

export default function UserInfo({ data = []}) {
  return (
    <>
      <Title text="基本信息" icon={icon} />
      {data.map((item, index) => <div className="user-info"><label>{item.label}</label><div>{item.value}</div></div>)}
    </>
  )
}
