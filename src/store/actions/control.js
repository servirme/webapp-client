import FINISHED_LOADING from '../actionTypes/control'

export default dispatch => () =>
  dispatch({
    type: FINISHED_LOADING,
  })
