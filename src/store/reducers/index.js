import { combineReducers } from 'redux'

import controlReducer, { controlInitialState } from './control'
import notificationsReducer, { notificationInitialState } from './notifications'
import apiReducer, { apiInitialState } from './api'

export default combineReducers({
  control: controlReducer,
  notifications: notificationsReducer,
  api: apiReducer,
})

export const initialState = {
  control: controlInitialState,
  notifications: notificationInitialState,
  api: apiInitialState,
}
