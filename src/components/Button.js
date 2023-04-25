/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Buttons({ title, cname }) {
  const handleNumberClick = (value) => {
    // eslint-disable-next-line max-len
  };
  return (
    <button
      className={cname}
      type="button"
      onClick={() => handleNumberClick(title)}
    >
      {title}
    </button>
  );
}

export default Buttons;
