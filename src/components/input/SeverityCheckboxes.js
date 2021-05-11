/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';

import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

export default function SeverityCheckboxes() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox name="minor" />} label="Minor" />
      <FormControlLabel control={<Checkbox name="major" />} label="Major" />
      <FormControlLabel
        control={<Checkbox name="critical" />}
        label="Critical"
      />
    </FormGroup>
  );
}
