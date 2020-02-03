import React from 'react';

const SessionTimer = ({ timer }) => {
  return (
    <div>
      <h2 id='timer-label'>Session</h2>
      <span id='time-left'>
        {timer < 600 ? '0' + Math.floor(timer / 60) : Math.floor(timer / 60)}:
        {timer % 60 < 10 ? '0' + (timer % 60) : timer % 60}
      </span>
    </div>
  );
};

export default SessionTimer;
