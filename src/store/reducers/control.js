import baseReducer from './helpers/base'
import FINISHED_LOADING from '../actionTypes/control'

const onFinishLoading = state => ({
  ...state,
  loading: false,
})

const reducers = {
  [FINISHED_LOADING]: onFinishLoading,
}

const controlInitialState = {
  loading: true,
}

export default baseReducer(reducers, controlInitialState)

export { controlInitialState }
