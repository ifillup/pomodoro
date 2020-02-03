import React, { useState } from 'react';
import moment from 'moment';

const Break = () => {
  const [breakLengthSeconds, setBreakLengthSeconds] = useState(300);

  const decrementBreakLength = () => {
    breakLengthSeconds - 60 < 0
      ? setBreakLengthSeconds(0)
      : setBreakLengthSeconds(breakLengthSeconds - 60);
  };
  const incrementBreakLength = () => {
    setBreakLengthSeconds(breakLengthSeconds + 60);
  };
  const breakLengthMinutes = moment.duration(breakLengthSeconds, 's').minutes();
  return (
    <div>
      <p id='break-label'>Break</p>
      <p id='break-length'>{breakLengthMinutes}</p>
      <button id='break-decrement' onClick={decrementBreakLength}>
        -
      </button>
      <button id='break-increment' onClick={incrementBreakLength}>
        +
      </button>
    </div>
  );
};

export default Break;
