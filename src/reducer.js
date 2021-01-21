const reducer = (state = {}, action) => {
  const { type, payload = {} } = action
  const { modules = []} = state
  const { moduleIndex } = payload
  switch (type) {
    case 'DELETE_MODULE':
      modules.splice(moduleIndex, 1)
      return {
        ...state,
        modules: [...modules]
      }
    case 'EDIT_MODULE':
      const editModule = modules[moduleIndex]
      return {
        ...state,
        edit: true,
        editModule: editModule
      }

    case 'HIDE_EDIT_MODULE':
    return {
      ...state,
      edit: false,
    }
    case 'UPDATE_MODULE':
      const { data } = payload
      const index = modules.findIndex((item) => item.component === data.component)
      modules[index] = data
      return {
        ...state,
        modules: [...modules]
      }
    default:
      return state
  }
}

export default reducer
