import React, { useState } from 'react';

import {
  Drawer as MuiDrawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  Tooltip,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const DRAWER_WIDTH = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const Drawer = ({ status, handleStatus, statuses }) => {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState('');
  const classes = useStyles();

  const handleClickOpenCustom = () => {
    setOpen(true);
  };

  const handleCloseCustom = () => {
    setOpen(false);
    setCustom();
  };

  const handleConfirmCustom = () => {
    handleStatus('custom', custom);
    handleCloseCustom();
  };

  const handleCustom = (e) => {
    setCustom(e.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <MuiDrawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right">
          <Toolbar />
          <div className={classes.drawer} />
          <List>
            {Object.keys(statuses).map((text) => (
              <Tooltip title={statuses[text].title}>
                <ListItem
                  button
                  key={text}
                  onClick={() => {
                    if (text === 'custom') {
                      handleClickOpenCustom();
                    } else {
                      handleStatus(text);
                    }
                  }}
                  style={{ paddingLeft: '32px', height: '56px' }}>
                  <ListItemIcon
                    style={{ color: text !== status ? '#78cdd7' : '#0d5c63' }}>
                    {statuses[text].icon}
                  </ListItemIcon>
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </MuiDrawer>
      </div>
      <Dialog open={open} onClose={handleCloseCustom}>
        <DialogTitle>Enter a custom status update</DialogTitle>
        <DialogContent>
          <TextField
            value={custom}
            onChange={handleCustom}
            autoFocus
            margin="dense"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCustom} color="primary">
            Cancel
          </Button>
          <Button
            disabled={!custom}
            onClick={handleConfirmCustom}
            color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Drawer;
