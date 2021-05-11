/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import moment from 'moment';
import * as ACTIONS from './cve.types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  displayData: [],
  error: '',
  minorVisible: true,
  majorVisible: true,
  criticalVisible: true,
  years: [],
  selectedYear: 'none',
  selectedYearData: [],
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    //* FETCH ALL CVES *//
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
        displayData: action.payload.CVE_Items,
        error: '',
      };
    case ACTIONS.FETCH_CVES_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        displayData: [],
        error: action.payload.toString(),
      };
    //* FETCH YEARS *//
    case ACTIONS.FETCH_YEARS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.FETCH_YEARS_SUCCESS:
      return {
        ...state,
        loading: false,
        years: action.payload,
        error: '',
      };
    case ACTIONS.FETCH_YEARS_FAILURE:
      return {
        ...state,
        loading: false,
        years: [],
        selectedYear: 'none',
        error: action.payload.toString(),
      };
    //* SEARCH BY ID *//
    case ACTIONS.SEARCH_BY_ID:
      return {
        ...state,
        selectedYearData: state.displayData.filter((i) =>
          i.cve.CVE_data_meta.ID.toLowerCase().includes(
            action.payload.toLowerCase(),
          ),
        ),
      };
    // RESET SEARCH
    case ACTIONS.RESET_SEARCH:
      return {
        ...state,
        selectedYearData: state.displayData.filter(
          (i) => moment(i.publishedDate).year() === state.selectedYear,
        ),
      };
    // SELECT YEAR
    case ACTIONS.SELECT_YEAR:
      return {
        ...state,
        selectedYear: action.payload,
        selectedYearData: state.displayData.filter(
          (i) => moment(i.publishedDate).year() === action.payload,
        ),
      };
    // TOGGLE MINOR DATA
    case ACTIONS.TOGGLE_MINOR_DATA:
      return {
        ...state,
        minorVisible: action.payload,
      };
    // TOGGLE MAJOR DATA
    case ACTIONS.TOGGLE_MAJOR_DATA:
      return {
        ...state,
        majorVisible: action.payload,
      };
    // TOGGLE CRITICAL DATA
    case ACTIONS.TOGGLE_CRITICAL_DATA:
      return {
        ...state,
        criticalVisible: action.payload,
      };
    // RESET ALL
    case ACTIONS.RESET_ALL:
      return {
        ...state,
        displayData: state.data.CVE_Items,
        selectedYearData: state.displayData.filter(
          (i) => moment(i.publishedDate).year() === state.selectedYear,
        ),
        minorVisible: true,
        majorVisible: true,
        criticalVisible: true,
        selectedYear: state.years[0],
      };
    default:
      return state;
  }
}

export default reducer;
