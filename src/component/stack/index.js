import React from 'react'
import Title from '../../component/title'

import icon from '../../../asset/stack.svg'

import './index.scss'

export default function StackInfo({ data = {}}) {
  return (
    <>
      <Title text="技术栈" icon={icon} />
      {data.map((item, index) => <div className="statck-info"><div>{item.value}</div></div>)}
    </>
  )
}
