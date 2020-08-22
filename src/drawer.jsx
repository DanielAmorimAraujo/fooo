import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Work from '@material-ui/icons/Work';
import Wc from '@material-ui/icons/Wc';
import LocalCafe from '@material-ui/icons/LocalCafe';
import Kitchen from '@material-ui/icons/Kitchen';
import LocalHospital from '@material-ui/icons/LocalHospital';
import EventBusy from '@material-ui/icons/EventBusy';
import WbSunny from '@material-ui/icons/WbSunny';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import NightsStay from '@material-ui/icons/NightsStay';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const statuses = {
  working: {
    icon: <Work fontSize="large"/>,
    title: "Working",
  },
  bathroom: {
    icon: <Wc fontSize="large"/>,
    title: "Bathroom",
  },
  lunch: {
    icon: <Kitchen fontSize="large"/>,
    title: "Lunch",
  },
  inAMeeting: {
    icon: <EventBusy fontSize="large"/>,
    title: "In a Meeting",
  },
  coffeeBreak: {
    icon: <LocalCafe fontSize="large"/>,
    title: "Coffee Break",
  },
  takingAWalk: {
    icon: <WbSunny fontSize="large"/>,
    title: "Taking a Walk",
  },
  runningAnErrand: {
    icon: <DirectionsRun fontSize="large"/>,
    title: "Running an Errand",
  },
  outSick: {
    icon: <LocalHospital fontSize="large"/>,
    title: "Out Sick",
  },
  offline: {
    icon: <NightsStay fontSize="large"/>,
    title: "Offline",
  },
  custom: {
    icon: <MoreHoriz fontSize="large"/>,
    title: "Custom",
  }
}

export default function PermanentDrawerRight() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpenCustom = () => {
    setOpen(true);
  };

  const handleCloseCustom = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{ background: '#F6CACA' }}>
        <Toolbar>
          <Typography variant="h6" noWrap style={{ color: '#0A014F', fontFamily: 'Alata' }}>
            Virtual Office 🏢
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <Toolbar />
        <div className={classes.drawer} />
        <List>
          {['working', 'bathroom', 'lunch', 'inAMeeting', 'coffeeBreak', 'takingAWalk','runningAnErrand', 'outSick', 'offline'].map((text) => (
            <Tooltip title={statuses[text].title}>
              <ListItem button key={text} style={{ paddingLeft: '32px', height: '56px' }}>
                <ListItemIcon style={{ color: '#F6CACA' }}>{statuses[text].icon}</ListItemIcon>
              </ListItem>
            </Tooltip>
          ))}
          <Tooltip title={statuses['custom'].title}>
              <ListItem button key={'custom'} style={{ paddingLeft: '32px', height: '56px' }} onClick={handleClickOpenCustom}>
                <ListItemIcon style={{ color: '#F6CACA' }}>{statuses['custom'].icon}</ListItemIcon>
              </ListItem>
            </Tooltip>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph align="center" style={{ color: '#0A014F', fontFamily: 'Alata' }}>
          {'developed with 🥺'}
        </Typography>
      </main>
      <Dialog open={open} onClose={handleCloseCustom} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter Custom Status Update</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCustom} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseCustom} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}