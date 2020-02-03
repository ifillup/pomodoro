import React, { useState } from 'react';
import moment from 'moment';

const Session = ({
  sessionLength,
  incrementSessionLength,
  decrementSessionLength
}) => {
  //   const incrementBreakLength = () =>
  //     setSessionLengthSeconds(sessionLengthSeconds + 60);

  //   const sessionLengthInMinutes = moment
  //     .duration(sessionLengthSeconds, 's')
  //     .minutes();
  return (
    <div>
      <p id='session-label'>Session Length</p>
      <p id='session-length'>{sessionLength / 60}</p>
      <button id='session-decrement' onClick={decrementSessionLength}>
        -
      </button>
      <button id='session-increment' onClick={incrementSessionLength}>
        +
      </button>
    </div>
  );
};

export default Session;
