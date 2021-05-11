import React from 'react';

import { InputLabel, Select, MenuItem } from '@material-ui/core';

export default function YearSelect() {
  <InputLabel id="select-year">Year</InputLabel>;
  return (
    <Select
      labelId="select-year"
      variant="outlined"
      color="secondary"
      value={2017}
      // onChange={handleChange}
    >
      <MenuItem value={2017}>2017</MenuItem>
      <MenuItem value={2018}>2018</MenuItem>
      <MenuItem value={2019}>2019</MenuItem>
      <MenuItem value={2020}>2020</MenuItem>
    </Select>
  );
}
