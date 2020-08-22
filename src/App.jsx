import React from 'react';
import Background from './office.svg'
import PermanentDrawerRight from './drawer.jsx'
import Stickies from 'stickies.jsx';

const App = () => {
  return (
    <>
    <div style={{
      backgroundImage: `url(${Background})`,
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw',
      marginTop: '5%'
      }}>
    <Stickies />
    </div>
    <PermanentDrawerRight />
    </>
  );
}

export default App;