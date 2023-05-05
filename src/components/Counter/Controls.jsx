import React from 'react';

const Controls = ({ OnIncrement, OnDecrement }) => {
  return (
    <div className="Counter__control">
      <button type="button" onClick={OnIncrement}>
        +1
      </button>
      <button type="button" onClick={OnDecrement}>
        -1
      </button>
    </div>
  );
};

export default Controls;
