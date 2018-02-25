import { combineReducers } from 'redux'

import controlReducer, { controlInitialState } from './control'

export default combineReducers({
  control: controlReducer,
})

export const initialState = {
  control: controlInitialState,
}
