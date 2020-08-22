import React from 'react';

import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Icon = ({ icon, handleIcon, icons }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (s) => {
    setAnchorEl(null);
    if (s) handleIcon(s);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar src={icons[icon]} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          handleClose();
        }}>
        {Object.keys(icons).map((i) => {
          return (
            <MenuItem
              onClick={() => {
                handleClose(i);
              }}>
              <Avatar src={icons[i]} />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

const Appbar = ({ icon, handleIcon, icons }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar className={classes.appBar} position="fixed" color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Fooo
          </Typography>
          <Icon icon={icon} handleIcon={handleIcon} icons={icons} />
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
    </div>
  );
};

export default Appbar;
