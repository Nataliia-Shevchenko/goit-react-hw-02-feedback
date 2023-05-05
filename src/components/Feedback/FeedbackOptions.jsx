import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(el => (
        <li key={el}>
          <button type="button" name={el} onClick={onLeaveFeedback}>
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
