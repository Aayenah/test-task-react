import * as ACTIONS from './drawer.types';

export function openDrawer() {
  return {
    type: ACTIONS.OPEN_DRAWER,
  };
}

export function closeDrawer() {
  return {
    type: ACTIONS.CLOSE_DRAWER,
  };
}
