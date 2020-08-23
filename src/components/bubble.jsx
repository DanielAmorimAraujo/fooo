import React from 'react';
import { Text, Circle, Image, Group, Label, Tag } from 'react-konva';
import useImage from 'use-image';

const Bubble = ({ statusMessage, iconImage }) => {
  const [icon] = useImage(iconImage);
  let statusColor = 'red';
  if (statusMessage === 'Working') {
    statusColor = 'green';
  } else if (statusMessage === 'Offline') {
    statusColor = 'grey';
  }

  return (
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
          fontFamily="Calibri"
          fontSize={16}
          padding={5}
          fill="#fffffa"
        />
      </Label>
      <Circle
        fill="white"
        stroke={statusColor}
        strokeWidth={4}
        height={64}
        width={64}
      />
      <Image image={icon} x={-24} y={-24} height={48} width={48} />
    </Group>
  );
};

export default Bubble;
