import React from 'react'
import Title from '../../component/title'

import icon from '../../../asset/work.svg'

import './index.scss'

export default function WorkExperience({ data = {}}) {
  return (
    <>
      <Title text="工作经历" icon='work' />
      {data.map((item, index) => <div className="workExperience-info"><li><h3>{item.label}</h3></li><div className="content" dangerouslySetInnerHTML={{__html: item.value}} /></div>)}
    </>
  )
}
