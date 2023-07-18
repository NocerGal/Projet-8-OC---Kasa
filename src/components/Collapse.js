import React from 'react';
import topArrow from '../assets/icons/top-arrow.png';
import { useState } from 'react';

function Collapse(props) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="colapse-nav">
      <div className="details-title" onClick={() => setOpened(!opened)}>
        <h3>{props.title}</h3>
        <img
          src={topArrow}
          alt="top-arrow"
          className={opened ? 'bottom-arrow' : 'top-arrow'}
        />
      </div>
      <div className={opened ? 'text display' : 'text hide'}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Collapse;
