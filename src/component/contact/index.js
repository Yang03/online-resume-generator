import React from 'react'
import Title from '../../component/title'

import icon from '../../../asset/contact.svg'

import './index.scss'

export default function UserInfo({ data = []}) {
  return (
    <>
      <Title text="联系方式" icon={icon} />
      {data.map((item, index) => <div className="user-info"><label>{item.label}</label><div>{item.value}</div></div>)}
    </>
  )
}
