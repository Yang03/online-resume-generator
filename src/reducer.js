const reducer = (state = {}, action) => {
  const { type, payload = {} } = action
  const { data = {} } = payload;
  const { modules = []} = state
  const index = modules.findIndex((item) => item.component === data.component)
  switch (type) {
    case 'DELETE_MODULE':
      modules.splice(index, 1)
      return {
        ...state,
        modules: [...modules]
      }
    case 'EDIT_MODULE':

      const editModule = modules[index]
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
