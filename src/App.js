import React from 'react';
import clsx from 'clsx';

import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// Actions
import { fetchCves } from './redux/Cve/cve.actions.get';

// Pages
import HomePage from './pages/HomePage';
import LoadingPage from './pages/LoadingPage';
import SideDrawer from './components/SideDrawer';
import AppBarWithSearch from './components/AppBar';

export default function App() {
  const styles = useStyles();
  const loading = useSelector((state) => state.cve.loading);
  const drawerOpen = useSelector((state) => state.drawer.open);
  const dispatch = useDispatch();

  React.useEffect(() => {
    // on app start, fetch CVE data
    dispatch(fetchCves());
  }, []);

  if (loading) {
    // fetching data...
    return <LoadingPage />;
  }

  return (
    <div
      className={clsx(styles.container, {
        // change class when drawer is open to shift content
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
    backgroundColor: theme.custom.contentBackground,
  },
  containerShift: {
    marginLeft: 240,
  },
}));
