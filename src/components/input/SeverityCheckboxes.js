/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';

// Actions
import {
  toggleMinorData,
  toggleMajorData,
  toggleCriticalData,
} from '../../redux/Cve/cve.actions.filter';

export default function SeverityCheckboxes() {
  const dispatch = useDispatch();
  const minorVisible = useSelector((state) => state.cve.minorVisible);
  const majorVisible = useSelector((state) => state.cve.majorVisible);
  const criticalVisible = useSelector((state) => state.cve.criticalVisible);

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            name="minor"
            checked={minorVisible} // binds to global state
            onChange={(e) => dispatch(toggleMinorData(e.target.checked))}
          />
        }
        label="Minor"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="major"
            checked={majorVisible} // binds to global state
            onChange={(e) => dispatch(toggleMajorData(e.target.checked))}
          />
        }
        label="Major"
      />
      <FormControlLabel
        control={
          <Checkbox
            name="critical"
            checked={criticalVisible} // binds to global state
            onChange={(e) => dispatch(toggleCriticalData(e.target.checked))}
          />
        }
        label="Critical"
      />
    </FormGroup>
  );
}
