import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Select, MenuItem } from '@material-ui/core';
import { selectYear } from '../../redux/Cve/cve.actions.get.years';

export default function YearSelect() {
  const years = useSelector((state) => state.cve.years);
  const selected = useSelector((state) => state.cve.selectedYear);
  const dispatch = useDispatch();

  // map years array into MenuItem components
  // to display in menu
  const item = years.map((y) => (
    <MenuItem key={y} value={y}>
      {y}
    </MenuItem>
  ));

  return (
    <Select
      labelId="select-year"
      variant="outlined"
      color="secondary"
      value={selected} // binds to global state
      MenuProps={{
        // anchors popover menu to appear under Select
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
        getContentAnchorEl: null,
      }}
      // dispatch an action to change currently selected year
      onChange={(e) => dispatch(selectYear(e.target.value))}
    >
      {item}
    </Select>
  );
}
