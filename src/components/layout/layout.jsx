import React, { useState } from 'react';
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
import { Button, Menu, MenuItem, Avatar } from '@material-ui/core';

import Bam from 'images/bam.png';
import Marina from 'images/marina.png';
import Nook from 'images/nook.png';

const ICONS = {
  bam: Bam,
  marina: Marina,
  nook: Nook,
};

const ChangeIcon = ({ handleIcon }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (s) => {
    setAnchorEl(null);
    if (s) handleIcon(s);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          handleClose();
        }}>
        {Object.entries(ICONS).map((icon) => {
          return (
            <MenuItem
              onClick={() => {
                handleClose(icon[0]);
              }}>
              <Avatar src={icon[1]} />
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

const Layout = () => {
  const [icon, setIcon] = useState('bam');

  const [image] = useImage(ICONS[icon]);

  return (
    <>
      <ChangeIcon handleIcon={setIcon} />
      <Stage width={window.innerWidth} height={window.innerHeight - 100}>
        <Layer>
          <Group draggable>
            <Label x={20} y={-16}>
              <Tag
                fill="pink"
                pointerDirection="down"
                pointerWidth={10}
                pointerHeight={10}
                lineJoin="round"
                shadowColor="grey"
                shadowBlur={10}
                shadowOffset={10}
                shadowOpacity={0.5}
              />
              <Text
                text="Washroom uwu"
                fontFamily="Calibri"
                fontSize={16}
                padding={5}
                fill="white"
              />
            </Label>
            <Image image={image} height={36} width={36} />
            <Circle
              stroke="red"
              strokeWidth={4}
              x={18}
              y={18}
              height={56}
              width={56}
            />
          </Group>
        </Layer>
      </Stage>
    </>
  );
};

export default Layout;
