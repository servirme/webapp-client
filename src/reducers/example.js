export const ADD_TODO = (state, action) => {
  return [
    ...state,
    {
      id: action.id,
      text: action.text,
      completed: false,
    },
  ]
}

export const TOGGLE_TODO = (state, action) => {
  return state.map((todo) => {
    return ((todo.id === action.id)
      ? { ...todo, completed: !todo.completed }
      : todo)
  })
}

export default []
