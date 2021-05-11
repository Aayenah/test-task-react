import { BASE_URL } from '../../config/api';
import * as ACTIONS from './cve.types';
import { fetchYears } from './cve.actions.get.years';

export function fetchCvesRequest() {
  return {
    type: ACTIONS.FETCH_CVES_REQUEST,
  };
}

export function fetchCvesSuccess(cves) {
  return {
    type: ACTIONS.FETCH_CVES_SUCCESS,
    payload: cves,
  };
}

export function fetchCvesFailure(error) {
  return {
    type: ACTIONS.FETCH_CVES_FAILURE,
    payload: error,
  };
}

export function fetchCves() {
  return async (dispatch) => {
    dispatch(fetchCvesRequest());
    try {
      const res = await fetch(`${BASE_URL}/cves`);
      if (res.ok) {
        const data = await res.json();
        dispatch(fetchCvesSuccess(data));
        dispatch(fetchYears());
      } else {
        throw new Error('Failed to fetch CVEs');
      }
    } catch (error) {
      dispatch(fetchCvesFailure(error));
    }
  };
}
