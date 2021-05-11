import { combineReducers } from 'redux';

import cveReducer from './Cve/cve.reducer';
import drawerReducer from './Drawer/drawer.reducer';

const rootReducer = combineReducers({
  cve: cveReducer,
  drawer: drawerReducer,
});

export default rootReducer;
