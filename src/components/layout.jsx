import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';

import Bubble from 'components/bubble';
import Office from 'images/office.svg';

const Layout = ({ statusMessage, iconImage }) => {
  const [background] = useImage(Office);

  return (
    <Stage
      width={window.innerWidth - 210 - 108}
      height={window.innerHeight - 64}>
      <Layer>
        <Image
          image={background}
          width={window.innerWidth - 210 - 108}
          height={window.innerHeight - 64}
        />
        <Bubble statusMessage={statusMessage} iconImage={iconImage} />
      </Layer>
    </Stage>
  );
};

export default Layout;
