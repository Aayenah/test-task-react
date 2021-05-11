import { BASE_URL } from '../../config/api';
import * as ACTIONS from './cve.types';
// import { setSelectedYear } from './cve.actions.year';

export function selectYear(year) {
  return {
    type: ACTIONS.SELECT_YEAR,
    payload: year,
  };
}

export function fetchYearsRequest() {
  return {
    type: ACTIONS.FETCH_YEARS_REQUEST,
  };
}

export function fetchYearsSuccess(years) {
  return {
    type: ACTIONS.FETCH_YEARS_SUCCESS,
    payload: years,
  };
}

export function fetchYearsFailure(error) {
  return {
    type: ACTIONS.FETCH_YEARS_FAILURE,
    payload: error,
  };
}

export function fetchYears() {
  return async (dispatch) => {
    dispatch(fetchYearsRequest());
    try {
      const res = await fetch(`${BASE_URL}/cves/years`);
      if (res.ok) {
        const data = await res.json();
        dispatch(fetchYearsSuccess(data.years));
        dispatch(selectYear(data.years[0]));
      } else {
        // const json = await res.json();
        throw new Error('Failed to fetch years');
      }
    } catch (error) {
      dispatch(fetchYearsFailure(error));
    }
  };
}
