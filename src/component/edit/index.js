import React from 'react'
import { Popup } from 'zarm'

import appContext from '../../appContext'

import removeIcon from '../../../asset/delete.svg'
import editIcon from '../../../asset/edit.svg'
import closeIcon from '../../../asset/close.svg'

import './index.scss'

export default function EditPanel(props) {
  const { children, show } = props
  const {dispatch, editModule = {} } = React.useContext(appContext)
  const { schema, defaultData } = editModule


  const close = () => {
    dispatch({type: 'HIDE_EDIT_MODULE'})
  }

  const change = (key, value) => {
    dispatch({
      type: 'UPDATE_MODULE',
      payload: {
        data: {
          ...editModule,
          defaultData: {
            ...defaultData,
            [key]: value,
          }
        }
      }
    })
  }

  const changeArray = (key, value, index) => {
    defaultData[index][key] = value
    dispatch({
      type: 'UPDATE_MODULE',
      payload: {
        data: {
          ...editModule,
          defaultData,
        }
      }
    })
  }

  const addItem = () => {
    const newData = {}
    schema.properties.map((proto, idx) => {
      newData[proto] = ''
    })
    defaultData.push(newData)
    dispatch({
      type: 'UPDATE_MODULE',
      payload: {
        data: {
          ...editModule,
          defaultData,
        }
      }
    })
  }

  const renderForm = () => {
    if (!schema) {
      return ''
    }
    let keys = []
    if (schema.type === 'object') {
      keys = Object.keys(schema.properties)
      return keys.map(item => <div className="form-item"><label>{schema.properties[item].title}</label><input name={item} defaultValue={defaultData[item]} onChange={(e) => change(item, e.target.value)}  /></div>)
    }
    if (defaultData) {
      return (<div>
          {
            defaultData.map((data, idx) => <div className="form-item-group">

              {
                schema.properties.map((proto) => {
                  keys = Object.keys(proto)
                  return keys.map(item => <div className="form-item"><label>{proto[item].title}</label><input name={item} defaultValue={data[item]} onChange={(e) => changeArray(item, e.target.value, idx)}  /></div>)
                })
              }

            </div>)
          }
          <button className="btn" onClick={addItem}>添加</button>
        </div>)

    }
    // return schema.properties.map((proto, idx) => {
    //   keys = Object.keys(proto)
    //   return keys.map(item => <div className="form-item"><label>{proto[item].title}</label><input name={item} defaultValue={defaultData[idx][item]} onChange={(e) => changeArray(item, e.target.value, idx)}  /></div>)
    // })
  }

  return (
    <Popup
        visible={show}
        direction="right"
        mask={false}
      >
        <button className="close-btn" onClick={close}><img src={closeIcon}/></button>
        <div className="popup-box">
          {
            renderForm()
          }
        </div>
      </Popup>
  )
}
