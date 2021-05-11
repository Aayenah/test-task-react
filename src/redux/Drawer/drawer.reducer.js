import * as ACTIONS from './drawer.types';

const INITIAL_STATE = {
  open: true,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //* DRAWER *//
    case ACTIONS.OPEN_DRAWER:
      return {
        ...state,
        open: true,
      };
    case ACTIONS.CLOSE_DRAWER:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}

export default reducer;
