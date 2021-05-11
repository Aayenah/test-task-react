import React from 'react';
import clsx from 'clsx';

import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage';
import SideDrawer from './components/SideDrawer';
import AppBarWithSearch from './components/AppBar';

export default function App() {
  const styles = useStyles();
  const loading = useSelector((state) => state.cve.loading);
  const drawerOpen = useSelector((state) => state.drawer.open);

  React.useEffect(() => {
    // dispatch(getOperator());
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div
      className={clsx(styles.container, {
        [styles.containerShift]: drawerOpen,
      })}
    >
      <SideDrawer />
      <AppBarWithSearch />
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: 'pink',
    backgroundColor: theme.custom.contentBackground,
  },
  containerShift: {
    marginLeft: 240,
  },
  content: {
    // marginLeft: '15rem',
    // paddingTop: '2rem',
    // paddingBottom: '2rem',
    // paddingRight: 0,
    // paddingLeft: 0,
    // backgroundColor: 'brown',
  },
}));
