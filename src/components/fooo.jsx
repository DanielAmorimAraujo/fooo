import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import {
  Work,
  Wc,
  LocalCafe,
  Kitchen,
  LocalHospital,
  EventBusy,
  WbSunny,
  DirectionsRun,
  NightsStay,
  MoreHoriz,
} from '@material-ui/icons';

import Appbar from 'components/appbar';
import Stickies from 'components/stickies';
import Layout from 'components/layout';
import Drawer from 'components/drawer';

import Nook from 'images/nook.png';
import Tia from 'images/tia.png';
import Beau from 'images/beau.png';
import Bam from 'images/bam.png';
import Marina from 'images/marina.png';

const STATUSES = {
  working: { icon: <Work fontSize="large" />, title: 'Working' },
  bathroom: { icon: <Wc fontSize="large" />, title: 'Bathroom' },
  lunch: { icon: <Kitchen fontSize="large" />, title: 'Lunch' },
  inAMeeting: { icon: <EventBusy fontSize="large" />, title: 'In a Meeting' },
  coffeeBreak: { icon: <LocalCafe fontSize="large" />, title: 'Coffee Break' },
  takingAWalk: { icon: <WbSunny fontSize="large" />, title: 'Taking a Walk' },
  runningAnErrand: {
    icon: <DirectionsRun fontSize="large" />,
    title: 'Running an Errand',
  },
  outSick: { icon: <LocalHospital fontSize="large" />, title: 'Out Sick' },
  offline: { icon: <NightsStay fontSize="large" />, title: 'Offline' },
  custom: { icon: <MoreHoriz fontSize="large" />, title: 'Custom' },
};

const ICONS = {
  nook: Nook,
  tia: Tia,
  beau: Beau,
  bam: Bam,
  marina: Marina,
};

const Fooo = () => {
  const [status, setStatus] = useState(Object.keys(STATUSES)[0]);
  const [statusMessage, setStatusMessage] = useState(STATUSES[status].title);
  const [icon, setIcon] = useState(Object.keys(ICONS)[0]);

  const handleStatus = (s, m) => {
    setStatus(s);
    if (m) {
      setStatusMessage(m);
    } else {
      setStatusMessage(STATUSES[s].title);
    }
  };

  const handleIcon = (s) => {
    setIcon(s);
  };

  return (
    <>
      <Appbar icon={icon} handleIcon={handleIcon} icons={ICONS} />
      <Grid container>
        <Grid style={{ width: '210px' }}>
          <Stickies />
        </Grid>
        <Grid>
          <Layout statusMessage={statusMessage} iconImage={ICONS[icon]} />
        </Grid>
      </Grid>
      <Drawer status={status} handleStatus={handleStatus} statuses={STATUSES} />
    </>
  );
};

export default Fooo;
