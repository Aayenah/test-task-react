import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

export default function LoadingPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <CircularProgress size={80} />
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
}));
