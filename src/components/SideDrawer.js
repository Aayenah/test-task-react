import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  IconButton,
  Divider,
  Typography,
  Button,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Actions
import { closeDrawer } from '../redux/Drawer/drawer.actions.toggle';
import YearSelect from './input/YearSelect';
import SeverityCheckboxes from './input/SeverityCheckboxes';

const drawerWidth = 240;

export default function SideDrawer() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.drawer.open);

  return (
    <Drawer
      className={styles.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: styles.paper,
      }}
    >
      <div className={styles.header}>
        <IconButton onClick={() => dispatch(closeDrawer())}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={styles.content}>
        <Typography variant="subtitle1" className={styles.section_label}>
          SELECT YEAR
        </Typography>
        <YearSelect />
        <Typography variant="subtitle1" className={styles.section_label}>
          SELECT SEVERITY
        </Typography>
        <SeverityCheckboxes />
        <div className={styles.btn_row}>
          <Button variant="outlined" color="secondary">
            Reset
          </Button>
          <Button variant="outlined" color="secondary">
            Apply
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  paper: {
    width: drawerWidth,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    // paddingTop: '2rem',
    height: '50%',
  },
  btn_row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  section_label: {
    marginTop: '2rem',
    marginBottom: '0.6rem',
  },
}));
