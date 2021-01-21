import React, { useEffect, useReducer, createContext } from 'react'
import ReactDOM from 'react-dom'
import Modules from './defaultModule'
import Reducer from './reducer'
import appContext from './appContext'

import Avatar from './component/avatar'
import UserInfo from './component/userInfo'
import Contact from './component/contact'
import StackInfo from './component/stack'
import WorkExperience from  './component/workExperience'

import DeleteAction from './component/delete'
import EditPanel from './component/edit'

import './app.scss';


const ComponentMap = {
  Avatar,
  UserInfo,
  Contact,
  Stack: StackInfo,
  WorkExperience
}

function App() {
  const storage = JSON.parse(window.localStorage.getItem('local_data') || '[]')
  let modulesData = storage
  if (!storage.length) {
    modulesData = Modules
    window.localStorage.setItem('local_data', JSON.stringify(Modules))
  }
  const [state, dispatch] = useReducer(Reducer, {
    modules: modulesData,
    edit: false
  })

  const { modules,  edit, editModule} = state

  console.log(state)

  useEffect(() => {
    window.localStorage.setItem('local_data', JSON.stringify(modules))
  }, [modules])

  const asideModules = modules.filter((item) => item.position === 'aside')
  const mainModules = modules.filter((item) => item.position === 'main')

  const renderModules = (components) => {
    return components.map((item, idx) => {
      const Component = ComponentMap[item.component];
      if (!Component) {
        return null;
      }
      return (
        <div
          className={`${item.component}-module module`}
          id={item.component}
        >
        <DeleteAction currentModule={item}>
          <Component
            data={item.defaultData}
          />
        </DeleteAction>
        </div>
      );
    });
  }
  return (
    <appContext.Provider value={{ dispatch, modules, editModule}}>
      <aside>
        {renderModules(asideModules)}
      </aside>
      <main>
        {
          renderModules(mainModules)
        }
      </main>
      <EditPanel show={edit} />
    </appContext.Provider>
  )
}


ReactDOM.render(<App />, document.getElementById('app'))
