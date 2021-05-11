import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import CveTable from '../components/data_display/CveTable';
import CveChart from '../components/data_display/CveChart';

export default function HomePage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Paper elevation={0} className={styles.content}>
        <Paper variant="outlined" className={styles.table}>
          <CveTable />
        </Paper>
        <Paper elevation={3} className={styles.graph}>
          <CveChart />
        </Paper>
      </Paper>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '93%',
    height: '100%',
    marginTop: 85,
    marginBottom: 25,
    padding: '1rem',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    marginBottom: '1rem',
  },
  graph: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
}));
