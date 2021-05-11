import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// Actions
import { openDrawer, closeDrawer } from '../redux/Drawer/drawer.actions.toggle';
import { resetSearch, searchById } from '../redux/Cve/cve.actions.filter';

export default function AppBarWithSearch() {
  const styles = useStyles();
  const open = useSelector((state) => state.drawer.open); // is drawer open
  const dispatch = useDispatch();

  function handleDrawerToggle() {
    if (open) {
      // drawer already open
      dispatch(closeDrawer());
    } else {
      dispatch(openDrawer());
    }
  }

  function handleSearch(e) {
    if (e.target.value.length < 1) {
      // search field is empty, reset table
      dispatch(resetSearch());
    } else {
      dispatch(searchById(e.target.value));
    }
  }

  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={styles.menuButton}
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={styles.title} variant="h6" noWrap>
          CVE ANALYSIS
        </Typography>
        <div className={styles.search}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search by CVE-ID…"
            classes={{
              root: styles.inputRoot,
              input: styles.inputInput,
            }}
            onChange={handleSearch}
          />
        </div>
        <div className={styles.grow} />
      </Toolbar>
    </AppBar>
  );
}

//* some of the styling was provided by MUI docs
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    color: 'white',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    backgroundColor: theme.palette.primary,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
