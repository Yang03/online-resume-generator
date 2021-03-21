import React from 'react'
import Title from '../../component/title'

// import icon from '../../../asset/base.svg'

import './index.scss'

export default function Contact({ data = []}) {
  return (
    <>
      <Title text="基本信息" icon='base' />
      {data.map((item, index) => <div className="contact-info"><label>{item.label}</label><div>{item.value}</div></div>)}
    </>
  )
}
