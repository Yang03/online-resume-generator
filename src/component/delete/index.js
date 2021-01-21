import React from 'react'
import appContext from '../../appContext'

import removeIcon from '../../../asset/delete.svg'
import editIcon from '../../../asset/edit.svg'

import './index.scss'

export default function DeleteAction(props) {
  const { children, moduleIndex } = props
  const {dispatch, modules} = React.useContext(appContext)

  return (
    <div className="delete">
      {children}
      <div className="action">
        <div className="delete-btn" onClick={() => dispatch({type: 'DELETE_MODULE', payload: { moduleIndex }})}>
          <img src={removeIcon} />
        </div>
        <div className="edit-btn" onClick={() => dispatch({type: 'EDIT_MODULE', payload: { moduleIndex }})}>
          <img src={editIcon} />
        </div>
      </div>
    </div>
  )
}
