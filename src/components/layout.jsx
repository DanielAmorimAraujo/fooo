import React from 'react';
import {
  Stage,
  Layer,
  Text,
  Circle,
  Image,
  Group,
  Label,
  Tag,
} from 'react-konva';
import useImage from 'use-image';

import Office from 'images/office.svg';

const Layout = ({ statusMessage, iconImage }) => {
  const [icon] = useImage(iconImage);
  const [background] = useImage(Office);

  return (
    <>
      <Stage width={window.innerWidth - 100} height={window.innerHeight - 64}>
        <Layer>
          <Image
            image={background}
            width={window.innerWidth - 100}
            height={window.innerHeight - 64}
          />
          <Group draggable x={48} y={84}>
            <Label y={-36}>
              <Tag
                fill="#44a1a0"
                pointerDirection="down"
                pointerWidth={10}
                pointerHeight={5}
                lineJoin="round"
                shadowColor="#78cdd7"
                shadowBlur={10}
                shadowOffset={10}
                shadowOpacity={0.5}
              />
              <Text
                text={statusMessage}
                fontFamily="Sans Serif"
                fontSize={16}
                padding={5}
                fill="#fffffa"
              />
            </Label>
            <Circle
              fill="#fffffa"
              stroke="red"
              strokeWidth={4}
              height={64}
              width={64}
            />
            <Image image={icon} x={-24} y={-24} height={48} width={48} />
          </Group>
        </Layer>
      </Stage>
    </>
  );
};

export default Layout;
