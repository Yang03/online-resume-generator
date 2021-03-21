import React from 'react'
import Title from '../../component/title'



import './index.scss'

export default function StackInfo({ data = {}}) {
  return (
    <>
      <Title text="技术栈" icon='stack' />
      {data.map((item, index) => <div className="statck-info"><div>{item.value}</div></div>)}
    </>
  )
}
