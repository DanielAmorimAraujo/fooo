import React, { useState } from 'react';

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
import Drawer from 'components/drawer';
import Layout from 'components/layout';

import Bam from 'images/bam.png';
import Marina from 'images/marina.png';
import Nook from 'images/nook.png';

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
  bam: Bam,
  marina: Marina,
  nook: Nook,
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
      <Drawer status={status} handleStatus={handleStatus} statuses={STATUSES} />
      <Layout statusMessage={statusMessage} iconImage={ICONS[icon]} />
    </>
  );
};

export default Fooo;

/*
<div>
  <Typography paragraph align="center">
    {'developed with 🥺'}
  </Typography>
</div>
*/
