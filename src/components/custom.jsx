import React from 'react';
import { Stage, Layer, Image, Transformer } from 'react-konva';
import useImage from 'use-image';

import Bubble from 'components/bubble';
import Chair from 'images/chair.png';
import Chair2 from 'images/chair-2.png';
import Table from 'images/table.png';
import Table2 from 'images/table-2.png';

const StaticImage = ({ image }) => {
  const [img] = useImage(image.src);

  return <Image image={img} x={image.x} y={image.y} {...image} />;
};

const URLImage = ({ image, isSelected, onSelect, onChange }) => {
  const [img] = useImage(image.src);
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        image={img}
        x={image.x}
        y={image.y}
        // I will use offset to set origin to the center of the image
        // offsetX={img && !isSelected ? img.width / 2 : 0}
        // offsetY={img && !isSelected ? img.height / 2 : 0}
        {...image}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...image,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...image,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const Custom = ({ building, statusMessage, iconImage }) => {
  const dragUrl = React.useRef();
  const stageRef = React.useRef();

  const [images, setImages] = React.useState([]);
  const [selectedId, selectShape] = React.useState(null);
  const [counter, setCounter] = React.useState(0);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) selectShape(null);
  };

  if (!building) {
    return (
      <Stage
        width={window.innerWidth - 210 - 124}
        height={window.innerHeight - 64}
        style={{ border: '1px solid grey' }}
        ref={stageRef}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}>
        <Layer>
          {images.map((image) => (
            <StaticImage image={image} />
          ))}
          <Bubble statusMessage={statusMessage} iconImage={iconImage} />
        </Layer>
      </Stage>
    );
  }

  return (
    <div>
      <img
        alt="chair"
        src={Chair}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      <img
        alt="chair-2"
        src={Chair2}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      <img
        alt="table"
        src={Table}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      <img
        alt="table-2"
        src={Table2}
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />
      <div
        onDrop={(e) => {
          // register event position
          stageRef.current.setPointersPositions(e);
          // add image
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
                id: counter,
              },
            ])
          );
          setCounter(counter + 1);
        }}
        onDragOver={(e) => e.preventDefault()}>
        <Stage
          width={window.innerWidth - 210 - 124}
          height={window.innerHeight - 64}
          style={{ border: '1px solid grey' }}
          ref={stageRef}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}>
          <Layer>
            {images.map((image, i) => (
              <URLImage
                image={image}
                isSelected={image.id === selectedId}
                onSelect={() => {
                  selectShape(image.id);
                }}
                onChange={(newAttrs) => {
                  const rects = images.slice();
                  rects[i] = newAttrs;
                  setImages(rects);
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Custom;
