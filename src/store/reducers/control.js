import baseReducer from './helpers/base'
import FINISHED_LOADING from '../actionTypes/control'

const onFinishLoading = (state, { estabilishment }) => ({
  ...state,
  loading: false,
  estabilishment,
})

const reducers = {
  [FINISHED_LOADING]: onFinishLoading,
}

const controlInitialState = {
  loading: true,
  estabilishment: {},
}

export default baseReducer(reducers, controlInitialState)

export { controlInitialState }
