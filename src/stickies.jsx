import React, { useState } from 'react';
import ReactStickies from 'react-stickies';

const Stickies = () => {
  const [notes, setNotes] = useState([]);

  const onSave = () => {
    // ??
  };

  const onChange = (n) => {
    setNotes(n);
  }

  return (
    <ReactStickies
      notes={notes}
      onChange={onChange}
      colors= {['#fffffA', '#78cdd7']}
      title={false}

    />
  )
}

export default Stickies;