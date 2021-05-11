import * as ACTIONS from './cve.types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
  success: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTIONS.FETCH_CVES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.FETCH_CVES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case ACTIONS.FETCH_CVES_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload.toString(),
      };
    default:
      return state;
  }
}

export default reducer;
