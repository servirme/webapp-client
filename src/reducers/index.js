import { combineReducers } from 'redux';

import * as example from './example';

const wrapper = (reducersMap) => {
  return (state = reducersMap.default, action) => {
    if (!action.type || !reducersMap[action.type]) {
      return state;
    }

    return reducersMap[action.type](state, action);
  };
};

const reducers = combineReducers({
  example: wrapper(example),
});

export default reducers;
