import * as ACTIONS from './cve.types';

export function toggleMinorData(toggle) {
  return {
    type: ACTIONS.TOGGLE_MINOR_DATA,
    payload: toggle,
  };
}

export function toggleMajorData(toggle) {
  return {
    type: ACTIONS.TOGGLE_MAJOR_DATA,
    payload: toggle,
  };
}

export function toggleCriticalData(toggle) {
  return {
    type: ACTIONS.TOGGLE_CRITICAL_DATA,
    payload: toggle,
  };
}

export function searchById(id) {
  return {
    type: ACTIONS.SEARCH_BY_ID,
    payload: id,
  };
}

export function resetSearch() {
  return {
    type: ACTIONS.RESET_SEARCH,
  };
}

export function resetAll() {
  return {
    type: ACTIONS.RESET_ALL,
  };
}
