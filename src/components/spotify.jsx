import React, { useState, useEffect } from 'react';

import { Button, Typography } from '@material-ui/core';
import MusicNote from '@material-ui/icons/MusicNote';

import logo from 'images/spotify.png';

const Spotify = () => {
  const [song, setSong] = useState('');
  const [temp, setTemp] = useState(true);

  let refresh = null;

  useEffect(() => {
    refresh = setInterval(() => setTemp(!temp), 6000);

    return () => {
      clearTimeout(refresh);
    };
  });

  const hashFragment = new URLSearchParams(
    window.location.hash.replace('#', '?')
  );
  const accessToken = hashFragment.get('access_token');

  useEffect(() => {
    if (accessToken) {
      fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      })
        .then((response) => response.json())
        .then(
          (response) => {
            setSong(response?.item?.name);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  });

  if (song)
    return (
      <Typography style={{ marginRight: '16px' }}>
        <MusicNote />
        {`Currently playing: ${song}`}
        <MusicNote />
      </Typography>
    );

  return (
    <a
      href={
        'https://accounts.spotify.com/authorize?client_id=03f545f5f30943b995d57b98c596c8df&redirect_uri=http:%2F%2Flocalhost%3A3000&scope=user-read-currently-playing%20user-read-playback-state&response_type=token'
      }>
      <Button>
        <img
          src={logo}
          style={{ height: '32px', padding: '2px' }}
          alt="spotify logo"
        />
      </Button>
    </a>
  );
};

export default Spotify;
