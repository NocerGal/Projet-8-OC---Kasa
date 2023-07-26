import React, { useEffect } from 'react';
import topArrow from '../assets/icons/top-arrow.png';
import { useState } from 'react';

function CollapseDescription(props) {
  const text = props.text;
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
      <div className={opened ? 'text display' : 'text hide'}>{text}</div>
    </div>
  );
}

export default CollapseDescription;
