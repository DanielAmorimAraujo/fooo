import React, { useState } from 'react';
import ReactStickies from 'react-stickies';

const Stickies = () => {
  const [notes, setNotes] = useState([]);
  const onChange = (n) => {
    setNotes(n);
  };

  return (
    <ReactStickies
      notes={notes}
      onChange={onChange}
      colors={['#FAE8EB', '#F6CACA', '#E4C2C6', '#CD9FCC']}
      title={false}
    />
  );
};

export default Stickies;
